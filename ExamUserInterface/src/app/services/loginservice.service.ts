import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import base_url from './helper'
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) {
   
   }
  
  public generateToken(loginDetails:any){
    return this.http.post(`${base_url}/generate-token`,loginDetails);
  }

  public getCurrentUser() {
    return this.http.get(`${base_url}/current-user`);
  }


//loginuser:to set token in localstorage
public loginUser(token:any){
  localStorage.setItem('token',token);
  return true;
}
public isLoggedIn() {
  let tokenStr = localStorage.getItem('token');
  if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
    return false;
  } else {
    return true;
  }
}

// logout : remove token from local storage
public logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

//get token
public getToken() {
  return localStorage.getItem('token');
}

//set userDetail
public setUser(user:any) {
  localStorage.setItem('user', JSON.stringify(user));
}

//getUser
public getUser() {
  let userStr = localStorage.getItem('user');
  if (userStr != null) {
    return JSON.parse(userStr);
  } else {
    this.logout();
    return null;
  }
}

//get user role

public getUserRole() {
  let user = this.getUser();
  return user.authorities[0].authority;
}

}
