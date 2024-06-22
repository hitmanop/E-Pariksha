import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CategoriesService } from '../../../services/categories.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent {
  categories = [];
  isLoading = true;

  constructor(private _category: CategoriesService) {}

  ngOnInit(): void {
    this._category.categories().subscribe(
      (data: any) => {
        this.categories = data;
        this.isLoading = false;
       
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        Swal.fire('Error !!', 'Error in loading data', 'error');
      }
    );
  }

  deleteCategory(cid){
    Swal.fire({
      icon: 'info',
      title: 'Quiz related to this Category will also be deleted Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        //delete...
        this._category.deletecategories(cid).subscribe(
          (data) => {
            this.categories = this.categories.filter((categories) => categories.cid != cid);
            Swal.fire('Success', 'Category deleted ', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Error in deleting Category', 'error');
          }
        );
      }
    });
  }
}
