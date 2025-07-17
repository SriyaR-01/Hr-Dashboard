import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatSidenav;
  public isMobile: boolean = false;
  public sidenavOpened: boolean = true;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    this.observer.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
      this.sidenavOpened = !this.isMobile;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.isMobile && this.drawer?.opened) {
          this.drawer.close();
        }
      });
  }

  public toggleSidenav(drawer: MatSidenav): void {
    drawer.toggle();
  }
}
