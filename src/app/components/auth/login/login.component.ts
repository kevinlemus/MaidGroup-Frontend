import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: Pick<User, 'username' | 'password'> = {
    username: '',
    password: { hashedPassword: '', dateLastUsed: null },
  };

  loginStatus = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.user).subscribe({
      next: (data) => {
        if (data instanceof HttpResponse<any>) {
          this.loginStatus = '${data.body} Welcome Back ${this.user.username}';
          let token = data.headers.get('authorization');
          if (token) localStorage.setItem('token', token);
        }
      },
      error: (error) => {
        this.loginStatus = 'Incorrect Username or Password';
        console.log(error);
      },
    });
  }
}
