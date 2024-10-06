import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const loginData = { username: this.username, password: this.password };

    this.errorMessage = '';

    this.http.post(`${environment.apiUrl}/Auth/login`, loginData).subscribe({
      next: (response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['./home']);
        } else {
          this.errorMessage = 'Invalid login response.';
        }
      },
      error: (error) => {
        if (error.status === 401) {
          this.errorMessage = 'Invalid username or password.';
        } else {
          this.errorMessage = 'Login failed. Please try again.';
          console.error('Login failed:', error);
        }
      }
    });
  }
}
