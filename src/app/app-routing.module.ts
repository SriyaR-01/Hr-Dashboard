import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';

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
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
