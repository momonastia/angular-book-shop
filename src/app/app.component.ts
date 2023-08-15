import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initializeApp(firebaseConfig)
  }

  constructor(private authService: AuthService) {}

  title = 'book-shop';

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }
}
