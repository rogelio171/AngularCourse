import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../login/login.component';
import {AuthorizationService} from '../services/authorization.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  hide = true;
  password = '';

  constructor(private authorizationService: AuthorizationService) {

  }

  ngOnInit() {
  }

  signUp() {
    this.authorizationService.signup(this.emailFormControl.value, this.password);
  }

}
