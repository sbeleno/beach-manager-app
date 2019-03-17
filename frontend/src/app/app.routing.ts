import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component : LoginComponent },
    { path: 'employees', component : EmployeesComponent },
    { path: 'create-employee', component: CreateEmployeeComponent }     
  ];
  
  export const routing = RouterModule.forRoot(routes);