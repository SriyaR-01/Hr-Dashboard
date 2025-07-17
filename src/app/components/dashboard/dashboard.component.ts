import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public dashboardView = true;
  public summaryStats = [
    { title: 'Total Employees', value: 120 },
    { title: 'Active Projects', value: 15 },
    { title: 'New Hires', value: 5 },
  ];

  public recentActivities = [
    'John updated performance metrics.',
    'New employee added: Alice.',
    'Policy documents revised.',
  ];

  constructor(private router: Router) {}

  public navigateTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }
}
