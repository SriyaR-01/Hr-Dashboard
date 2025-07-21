import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/dashboard/employee/employee.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { JobOpeningsComponent } from './components/dashboard/job-openings/job-openings.component';
import { JobOpeningDetailComponent } from './components/dashboard/job-opening-detail/job-opening-detail.component';
import { AllJobOpeningsComponent } from './components/dashboard/all-job-openings/all-job-openings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'performance', component: PerformanceComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'job-openings', component: JobOpeningsComponent },
      { path: 'job-openings/all', component: AllJobOpeningsComponent },
      { path: 'job-openings/:id', component: JobOpeningDetailComponent },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
