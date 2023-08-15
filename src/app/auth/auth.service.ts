import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../interface/Auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) { }

  login(form: LoginForm){

    if(this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
    // Signed in
    this.isAuthenticated = true;
    this.router.navigate([""])
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

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(["login"])
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }
}
