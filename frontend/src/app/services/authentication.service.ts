import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  readonly URL_API = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  validateUser(user: User) {   
    
    const userData = 'email=' + user.email + '&password=' + user.password;
    const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'No-Auth': 'true'});

    return this.http.post(this.URL_API + '/login', userData, { headers: reqHeader});
  }
  
}
