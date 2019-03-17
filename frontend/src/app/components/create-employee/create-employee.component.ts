import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { BeachService } from 'src/app/services/beach.service';
import { Router } from '@angular/router';
import { Beach } from 'src/app/models/beach';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    beach: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  });

  beaches: Beach[] = [];

  constructor(private employeeService: EmployeeService, 
              private beachService: BeachService,
              public router: Router) { }

  ngOnInit() {
    this.getBeaches();
  }

  createEmployee() {
    this.employeeForm.patchValue({
      beach: this.findBeach(this.employeeForm.get('beach').value)
    });

    this.employeeService.createEmployee(this.employeeForm.value)
      .subscribe( res => { 
        this.router.navigate(['/employees']); 
      });
  }

  getBeaches() {
    this.beachService.getBeaches()
      .subscribe( (beachesData: Beach[]) => {
        this.beaches = beachesData;
      });
  }

  findBeach(name: string): Beach {
    return this.beaches.find(beach => beach.name == name);
  }

}
