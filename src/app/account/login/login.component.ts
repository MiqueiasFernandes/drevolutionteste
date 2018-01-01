import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../user.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { LocalStorageService } from 'ng2-webstorage';
import '../../rxjs-operators.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  _error: any = {};

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private http: Http,
    private $localStorage: LocalStorageService
  ) { }

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close(false);
  }


  login() {
    const userName = this.username;
    const password = this.password;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.limparOnStorage('auth_token');
    this.http
      .post(
      'http://localhost:51204/api/auth/login',
      JSON.stringify({ userName, password }),{ headers }
      )
      .map(res => {
        this.storeData('auth_token', res.json());
        return true;
      })
      .subscribe(res =>{
        if (res){
          this.dialogRef.close(true);
        }
      },
      (error) => {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
         this._error =  body;
          const err =  body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
      });
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err =  body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
  }


  private storeData(id :string, data :string) {
    this.limparOnStorage(id);
    this.$localStorage.store(id, {time : new Date().getTime(), data : data});
}

private limparOnStorage(id :string) {
    this.$localStorage.clear(id);
}

private getFromStorage(id: string):string {
  const data: string = this.$localStorage.retrieve(id);
 return data && data.startsWith('{') && data.endsWith('}') ? JSON.parse(data) : data;
}

}
