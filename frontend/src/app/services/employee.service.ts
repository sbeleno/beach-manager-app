import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[];
  reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')});
  readonly URL_API = 'http://localhost:3000/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.URL_API, {headers: this.reqHeader});   
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee, {headers: this.reqHeader});
  }

  updateEmployee(employee: Employee) {
    return this.http.put(this.URL_API + `/${employee._id}`, employee, {headers: this.reqHeader});
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.URL_API + `/${id}`, {headers: this.reqHeader});
  }
}
