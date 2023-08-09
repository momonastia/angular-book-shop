import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interface/Auth';

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
    console.log(this.form)
  }

}
