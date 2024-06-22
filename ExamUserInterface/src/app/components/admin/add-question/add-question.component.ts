import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionserviceService } from '../../../services/questionservice.service';
import Swal from 'sweetalert2';

import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent {
  qId;
  qTitle;
  question = {
    quiz: {},
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  };

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionserviceService,
    private location: Location,
    private _snack:MatSnackBar
  ) {}
  
  cancel() {
    this.location.back(); 
  }
  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this.question.quiz['qid'] = this.qId;
  }
  formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null) {
      this._snack.open('Question Required !!', 'OK', {
        duration: 3000,
      });
      return;
    }

    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      this._snack.open('Option 1 Required !!', 'OK', {
        duration: 3000,
      });
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      this._snack.open('Option 2 Required !!', 'OK', {
        duration: 3000,
      });
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      this._snack.open('Answer Required !!', 'OK', {
        duration: 3000,
      });
      return;
    }

    //form submit
    this._question.addQuestion(this.question).subscribe(
      (data: any) => {
        Swal.fire('Success ', 'Question Added. Add Another one', 'success');
        this.question.content = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
        this.question.answer = '';
      },
      (error) => {
        Swal.fire('Error', 'Error in adding question', 'error');
      }
    );
  }
}

