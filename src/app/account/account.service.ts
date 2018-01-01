import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Observable } from 'rxjs/Observable';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { LocalStorageService } from 'ng2-webstorage';

import '../rxjs-operators.js';

@Injectable()
export class AccountService {

  constructor(
    private dialog: MatDialog,
    private http: Http,
    private $localStorage: LocalStorageService
  ) { }


  login(): Observable<boolean>{
    return this.dialog.open(LoginComponent, {
      width: '350px'
    }).afterClosed();
  }

  register(url?: string) {
    return this.dialog.open(RegisterComponent, {
      width: '350px',
      data: { url: url }
  });
  }

  isLogado(): Observable<boolean> {

    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let authToken = this.getTokenFromStorage();

      if (!authToken)
      return Observable.of(false);


      headers.append('Authorization', `Bearer ${authToken}`);


    return this.http
    .get('http://localhost:51204/api/dashboard/home',{ headers })
    .map(res => res.json().message ? true : false)
    .catch(error => Observable.of(false));
  }


  logout() {
    this.limparOnStorage('auth_token');
  }


  private limparOnStorage(id :string) {
    this.$localStorage.clear(id);
}

  private getTokenFromStorage():string {
    const data = this.$localStorage.retrieve('auth_token');
   return !data ? data : data.data.auth_token;
  }

}
