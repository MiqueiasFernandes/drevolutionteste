import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {RegisterComponent} from '../../account/register/register.component';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'o app funciona! mesmo oi';

  open = true;

  options :any =   {
    'fixed': true,
    'top': 0,
    'bottom': 0,
  };

  constructor(private account: AccountService) { }

  ngOnInit() {
  }


  log = 'nao logado';
  animal: string;
  name: string;

  logado = false;

  register(){
    this.account.register();
  }

  login(){
    this.account.login()
    .subscribe(res =>  {
      this.log = (res ? 'logado' : 'inlogado');
      this.account.isLogado().subscribe(dt => this.logado = dt);
    } );
  }

  }



