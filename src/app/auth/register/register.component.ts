import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/interface/Auth';

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
    console.log(this.form)
  }

}
