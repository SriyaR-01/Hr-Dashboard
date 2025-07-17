import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  public username = '';
  public password = '';
  public loginFailed = false;

  constructor(private auth: AuthService, private router: Router) {}

  public onLogin(): void {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/']);
    } else {
      this.loginFailed = true;
    }
  }

}
