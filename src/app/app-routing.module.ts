import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SalaryDistCalcComponent } from './salary-dist-calc/salary-dist-calc.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'user/id', component: UserDetailsComponent },
  { path: 'salcal', component: SalaryDistCalcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
