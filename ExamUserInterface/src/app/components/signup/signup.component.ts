import { Component } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private userService: UserserviceService ,private snack:MatSnackBar) {}
  public User = {
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phoneNumber: '',
  };
  formSubmit() {
    if (this.User.username=='' || this.User.username==null){
      this.snack.open('Username Can not be Empty', 'Ok',{
        duration:3000
      });
      return;
    }
    this.userService.registerUser(this.User).subscribe(
      (data) => {
        Swal.fire('Success','User Registered','success')
        console.log("happy")
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
