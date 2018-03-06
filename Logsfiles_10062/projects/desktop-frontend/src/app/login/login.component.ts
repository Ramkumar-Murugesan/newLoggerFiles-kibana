import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../config/user.service';
import { AuthService } from '../login/auth.service';
import { ApiService } from '../config/api.service';
import { ConfigService } from '../config/config.service';


import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
 
  templateUrl: './login.component.html',
  providers: [UserService,ApiService,ConfigService,AuthService,FormBuilder],
  styleUrls: ['style.css']

})
export class LoginComponent implements OnInit {
   data:any={};
   title = 'Login';
  submitted = false;
  errorDiagnostic: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {

  }


}
