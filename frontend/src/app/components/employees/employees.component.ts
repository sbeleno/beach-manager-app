import { Component, OnInit} from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';
import { BeachService } from 'src/app/services/beach.service';
import { Beach } from 'src/app/models/beach';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    beach: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

  employees: Employee[] = [];
  beaches: Beach[] = [];
  employeeSelected: Employee;

  constructor(private employeeService: EmployeeService, 
              private beachService: BeachService,
              public router: Router) { }

  ngOnInit() {
    this.getEmployees();       
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe( (employeesData: Employee[]) => {
        this.employees = employeesData;
      });
  }

  getBeaches() {
    this.beachService.getBeaches()
      .subscribe( (beachesData: Beach[]) => {
        this.beaches = beachesData;
      });
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee._id)
      .subscribe( res => {
        this.getEmployees();  
      });
  }

  selectEmployee(employee: Employee) {
    this.getBeaches();  
    this.employeeSelected = employee;

    this.employeeForm.patchValue({
        _id: this.employeeSelected._id,
        name: this.employeeSelected.name,
        email: this.employeeSelected.email,
        phone: this.employeeSelected.phone,
        beach: this.employeeSelected.beach.name,
        gender: this.employeeSelected.gender
      });
  }

  updateEmployee() {        
    this.employeeForm.patchValue({
      beach: this.findBeach(this.employeeForm.get('beach').value)
    });
   
    this.employeeService.updateEmployee(this.employeeForm.value)
      .subscribe( res => {
        this.resetEmployeeSeleted(); 
        this.getEmployees();
      }, err => {
        console.log(err);
      });
  }

  findBeach(name: string): Beach {
    return this.beaches.find(beach => beach.name == name);
  }

  resetEmployeeSeleted() {
    this.employeeSelected = null;  
  }
  

}
