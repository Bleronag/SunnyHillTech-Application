import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login(email: string, password: string) {
    // Implementation of the login method
    // Add your login logic here
  }

  title = 'myapp'; // Add the title property with the desired value
}
