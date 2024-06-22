import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from './helper';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private http:HttpClient) { }
  public categories(){
  return this.http.get(`${base_url}/category/`);
  }

  public addcategories(category:Object){
    return this.http.post(`${base_url}/category/create`,category)
  }
  public deletecategories(categoryId){
    return this.http.delete(`${base_url}/category/${categoryId}`)
  }
}
