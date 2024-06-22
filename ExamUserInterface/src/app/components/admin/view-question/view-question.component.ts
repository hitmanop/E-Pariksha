import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionserviceService } from '../../../services/questionservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrl: './view-question.component.css'
})
export class ViewQuestionComponent {
  qId;
  qTitle;
  questions = [];

  constructor(
    private _route: ActivatedRoute,
    private _snack: MatSnackBar,
    private _question: QuestionserviceService
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    console.log(this.qId)
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        console.log(data);
        this.questions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteQuestion(qid) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        //confim
        this._question.deleteQuestion(qid).subscribe(
          (data) => {
            this._snack.open('Question Deleted ', 'OK', {
              duration: 3000,
            });
            this.questions = this.questions.filter((q) => q.quesId != qid);
          },

          (error) => {
            this._snack.open('Error in deleting questions', 'OK', {
              duration: 3000,
            });
            console.log(error);
          }
        );
      }
    });
  }
}
