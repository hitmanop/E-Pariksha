import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from './helper';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  public registerUser(user:object){
  return this.http.post(`${base_url}/user/create`,user);
  }
}
