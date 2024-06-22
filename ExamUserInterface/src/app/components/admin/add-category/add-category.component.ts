import { Component } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  category = {
    title: '',
    description: '',
  };

  constructor(private addcategory: CategoriesService,
    private _snack: MatSnackBar,
    private _router:Router
  ) {}
  formSubmit() {
    if (this.category.title.trim() == '' || this.category.title == null) {
      this._snack.open('Title Required !!', 'OK', {
        duration: 3000,
      });
      return;
    }

    //all done

    this.addcategory.addcategories(this.category).subscribe(
      (data: any) => {
        this.category.title = '';
        this.category.description = '';
        Swal.fire('Success !!', 'Category is added successfuly', 'success').then((e) => {
          this._router.navigate(['/admin-dashboard/categories']);
        });
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Server error !!', 'error');
      }
    );
  }

}
