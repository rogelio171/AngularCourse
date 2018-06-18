import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private angularFireAuth: AngularFireAuth, private snackBar: MatSnackBar) { }

  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        this.snackBar.open('User logged in successfully', '', {duration: 2000});
      })
      .catch(error => {
        this.snackBar.open('An error was occurred. ', error.status + ' ' + error.statusText, {duration: 2000});
      });
  }

  public signup = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.snackBar.open('User registered successfully', '', {duration: 2000});
      })
      .catch(error => {
        this.snackBar.open('An error was occurred. ', error.status + ' ' + error.statusText, {duration: 2000});
    });
  }

}
