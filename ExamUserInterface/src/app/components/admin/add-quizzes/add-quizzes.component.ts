import { Component } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrl: './add-quizzes.component.css'
})
export class AddQuizzesComponent {
  categories =[];

  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    noOfQuestion: '',
    active: true,
    category: {
      cid: '',
    },
  };
  constructor(private category:CategoriesService,
    private _snack: MatSnackBar,
    private _quiz:QuizService,
    private _router:Router,
    private location: Location
  ){}


  ngOnInit(): void {
    this.category.categories().subscribe(
      (data: any) => {
        this.categories = data;
     
      },
      (error) => {
        console.log(error);
       
        Swal.fire('Error!!', 'error in loading data from server', 'error');
      }
    );
  }

  addQuiz() {
    if (this.quizData.title.trim() == '' || this.quizData.title == null) {
      this._snack.open('Title Required !!', 'OK', {
        duration: 3000,
      });
      return;
    }
    this._quiz.addQuiz(this.quizData).subscribe(
      (data) => {
        Swal.fire('Success', 'Quiz is added', 'success').then((e) => {
          this._router.navigate(['/admin-dashboard/quizzes']);
        });
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          noOfQuestion: '',
          active: true,
          category: {
            cid: '',
          },
        };
      },

      (error) => {
        Swal.fire('Error!! ', 'Error while adding quiz', 'error');
        console.log(error);
      }
    );
  }
  cancel() {
    this.location.back(); 
  }
  
}
