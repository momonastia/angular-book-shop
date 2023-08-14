import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/interface/Auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: RegisterForm = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  submit() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
     })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
     });

    console.log(this.form)
  }

}
