import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private apiService: ApiService) { }

  login(email: string, password: string): void {
    this.apiService.login(email, password).subscribe(
      response => {
        // Handle the successful login response here.
        console.log(response);
      },
      error => {
        // Handle the login error here.
        console.error(error);
      }
    );
  }
}
