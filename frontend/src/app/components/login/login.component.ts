import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  
  
  constructor(private authenticationService: AuthenticationService, 
              private router: Router) { }

  ngOnInit() {
  }

  getLogin() {     

    const user = new User(this.loginForm.value.email,this.loginForm.value.password);

    this.authenticationService.validateUser(user)
      .subscribe( (res: Response) => { 
        //localStorage.getItem('token')?localStorage.removeItem('token'):localStorage.setItem('token', res.token);
        localStorage.setItem('token', res.token);
        this.router.navigate(['employees']);        
      });
  }

}
