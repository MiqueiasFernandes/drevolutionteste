import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  user: User = new User();
  _error: any = {};

  constructor(
    private dialogRef: MatDialogRef<RegisterComponent>,
    private snackBar: MatSnackBar,
    private http: Http,

  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

register()
{    
   let body = JSON.stringify(this.user);
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });

    this.http.post("http://localhost:51204/api/accounts", body, options)
    .toPromise().then(res => {

      if (!res.ok){

        if (res.status === 400){
          this._error = res.json();
        }else{
          alert('Houve um erro inesperado');
        }

        /////insucessso
return;
      }


      this.onNoClick();
      this.snackBar.open('Usuario registrado com sucesso!', this.user.UserName, {duration: 3000});
    }
   
  ).catch((error) => {
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



}
