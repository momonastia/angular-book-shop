import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../interface/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  constructor() { }

  login(form: LoginForm){

    if(this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
    // Signed in
    this.isAuthenticated = true;
    // ...
   })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.isAuthenticated = false;
   })
    .finally (() => {
    this.isLoading = false;
   })
  }

  passwordMached: boolean = true;

  register(form: RegisterForm){
    if(this.isLoading) return;

    this.isLoading = true;

    if(form.password !== form.confirmPassword) {
      this.passwordMached = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      this.isAuthenticated = true;
     })
    .catch((error) => {
    this.isAuthenticated = false;
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
     })
     .finally (() => {
      this.isLoading = false;
    })
  }
}
