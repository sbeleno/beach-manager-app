import { Injectable } from '@angular/core';
import { Beach } from '../models/beach';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeachService {

  beach: Beach;
  reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token')});
  readonly URL_API = 'http://localhost:3000/api/beaches';

  constructor(private http: HttpClient) { }

  getBeaches() {
    return this.http.get(this.URL_API, {headers: this.reqHeader});   
  }

  createBeach(beach: Beach) {
    return this.http.post(this.URL_API, beach, {headers: this.reqHeader});
  }

  updateBeach(beach: Beach) {
    return this.http.put(this.URL_API + `/${beach._id}`, beach, {headers: this.reqHeader});
  }

  deleteBeach(id: string) {
    return this.http.delete(this.URL_API + `/${id}`, {headers: this.reqHeader});
  }
}
