import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { SalaryDistCalcComponent } from './salary-dist-calc/salary-dist-calc.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailsComponent,
    SignupComponent,
    LoginFormComponent,
    SalaryDistCalcComponent
  ],
  exports: [
    SignupComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
