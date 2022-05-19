import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  message?: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        const redirectUrl = this.authService.redirectUrl;

        // Redirect the user
        this.router.navigate([redirectUrl], {
          queryParamsHandling: 'preserve',
          preserveFragment: true,
        });
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
