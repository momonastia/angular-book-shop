import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interface/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: LoginForm = {
    email: "",
    password: ""
  }

  submit() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
  .then((userCredential) => {
    // Signed in
    alert("Login success")
    // ...
   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Credentials do not match our records")
   });
  }

}
