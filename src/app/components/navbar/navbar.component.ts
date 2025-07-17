import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private router: Router, private authService: AuthService) {}

  public goToProfile(): void {
    this.router.navigate(['/settings']);
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
