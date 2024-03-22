import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  login(): void {
    // Здесь будет ваш код для обработки логина
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}