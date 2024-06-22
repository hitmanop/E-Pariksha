import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {

isloggedin=false
user=null

constructor(public loginservice:LoginserviceService, public _router:Router,private ngxService: NgxUiLoaderService){

}
  ngOnInit(): void {
    this.isloggedin=this.loginservice.isLoggedIn()
    this.user=this.loginservice.getUser()
    this.loginservice.loginStatusSubject.asObservable().subscribe(() => {
      this.isloggedin = this.loginservice.isLoggedIn();
      this.user = this.loginservice.getUser();
    });
  }

logout(){

  Swal.fire({
    title: 'Do you want Logout?',
    showCancelButton: true,
    confirmButtonText: `Yes`,
    denyButtonText: `Cancel`,
    icon: 'info',
  }).then((result) => {
    this.ngxService.startBackground();
    if (result.isConfirmed) {
      this.loginservice.logout()
      window.location.href = "http://localhost:4200/login";
    this.ngxService.stopBackground();
   
  
    } else if (result.isDenied) {
      
    }
  });
}
}
