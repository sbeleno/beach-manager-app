import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EmployeesComponent } from './components/employees/employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
