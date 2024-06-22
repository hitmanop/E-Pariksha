import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(
  private snack:MatSnackBar,
  private loginservice:LoginserviceService,
  private router:Router
 
){

}
loginDetails={
  username:"",
  password:""
}

loginFormSubmit(){
  
  if (
    this.loginDetails.username.trim() == '' ||
    this.loginDetails.username == null
  ) {
    this.snack.open('Username is required !! ', 'OK', {
      duration: 3000,
    });
    return;
  }

  if (
    this.loginDetails.password.trim() == '' ||
    this.loginDetails.password == null
  ) {
    this.snack.open('Password is required !! ', 'OK', {
      duration: 3000,
    });
    return;
  }
  this.loginservice.generateToken(this.loginDetails).subscribe((data:any)=>{
      this.loginservice.loginUser(data.token);
      this.loginservice.getCurrentUser().subscribe((user:any)=>{
      this.loginservice.setUser(user);

      console.log("User Saved In Local Storage");

      if (this.loginservice.getUserRole() == 'ADMIN') {
    
        this.router.navigate(['admin-dashboard']);
        this.loginservice.loginStatusSubject.next(true);
      } else if (this.loginservice.getUserRole() == 'USER') {
       
         this.router.navigate(['user-dashboard/0']);
        this.loginservice.loginStatusSubject.next(true);
      } else {
        this.loginservice.logout();
      }

    })
  },(error)=>{
    console.log(error)
    this.snack.open("Invalid Credentials")
  });
}

}
