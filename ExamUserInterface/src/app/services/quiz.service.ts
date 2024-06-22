import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from './helper';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }
  
public getQuiz(){
  return this.http.get(`${base_url}/quiz/`);
}
public addQuiz(quiz) {
  return this.http.post(`${base_url}/quiz/create`, quiz);
}

public deleteQuiz(qId) {
  return this.http.delete(`${base_url}/quiz/${qId}`);
}

public getQuizById(qId) {
  return this.http.get(`${base_url}/quiz/${qId}`);
}

public updateQuiz(quiz) {
  return this.http.put(`${base_url}/quiz/`, quiz);
}

public getQuizzesByCategory(cid){
  return this.http.get(`${base_url}/quiz/category/${cid}`);
}
public getActiveQuizzes(){
  return this.http.get(`${base_url}/quiz/active`);
}
public getQuizzesByCategoryAndActive(cid){
  return this.http.get(`${base_url}/quiz/active/category/${cid}`);
}
}

 