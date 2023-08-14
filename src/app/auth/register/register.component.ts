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

  passwordMached: boolean = true;

  submit() {
    if(this.form.password !== this.form.confirmPassword) {
      this.passwordMached = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
    .then((userCredential) => {
      console.log(userCredential)
     })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
     });

    console.log(this.form)
  }

}
