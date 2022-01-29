import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'myproject';
  isLoggedIn = true;
  constructor(private authSvc: AuthService) {
    this.isLoggedIn = this.authSvc.isLoggedIn();
  }
  
  logout() {
    console.log('you are logged off');
  }
}
