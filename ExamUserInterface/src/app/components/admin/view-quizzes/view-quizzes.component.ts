import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})
export class ViewQuizzesComponent implements OnInit{

  quizzes =[  

  ]
  isLoading=true
  constructor(private _quiz: QuizService) {}

  ngOnInit(): void {
    this._quiz.getQuiz().subscribe(
      (data: any) => {
        this.quizzes = data;
     this.isLoading=false
      },
      (error) => {
        console.log(error);
        this.isLoading=false
        Swal.fire('Error !', 'Error in loading data !', 'error');
      }
    );
  }

  deleteQuiz(qId) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //delete...
        this._quiz.deleteQuiz(qId).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qid != qId);
            Swal.fire('Success', 'Quiz deleted ', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting quiz', 'error');
          }
        );
      }
    });
  }
}
