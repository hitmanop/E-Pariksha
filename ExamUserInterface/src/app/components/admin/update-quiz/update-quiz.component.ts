import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { CategoriesService } from '../../../services/categories.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent implements OnInit{
  constructor(
    private _route: ActivatedRoute,
    private _quiz: QuizService,
    private _cat: CategoriesService,
    private _router: Router
  ) {}

  qId = 0;
  quiz;
  categories;

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this._quiz.getQuizById(this.qId).subscribe(
      (data: any) => {
        this.quiz = data;
        console.log(this.quiz);
      },
      (error) => {
        console.log(error);
      }
    );
    this._cat.categories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (error) => {
        alert('error in loading categories');
      }
    );
  }
    //update form submit
    public updateData() {
      //validatate
  
      this._quiz.updateQuiz(this.quiz).subscribe(
        (data) => {
          Swal.fire('Success !!', 'quiz updated', 'success').then((e) => {
            this._router.navigate(['/admin-dashboard/quizzes']);
          });
        },
        (error) => {
          Swal.fire('Error', 'error in updating quiz', 'error');
          console.log(error);
        }
      );
    }
}
