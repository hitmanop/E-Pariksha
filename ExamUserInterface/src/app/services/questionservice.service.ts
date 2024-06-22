import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import base_url from './helper';
@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  constructor(private _http: HttpClient) {}

  public getQuestionsOfQuiz(qid) {
    return this._http.get(`${base_url}/question/quiz/${qid}`);
  }

//add question

public addQuestion(question) {
  return this._http.post(`${base_url}/question/create`, question);
}
  //delete question
  public deleteQuestion(questionId) {
    return this._http.delete(`${base_url}/question/${questionId}`);
  }
  public evalQuiz(questions) {
    return this._http.post(`${base_url}/question/evalquiz`, questions);
  }
}