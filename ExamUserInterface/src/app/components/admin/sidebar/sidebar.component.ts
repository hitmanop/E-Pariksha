import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginserviceService } from '../../../services/loginservice.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(public loginservice:LoginserviceService){}

logout(){
  Swal.fire({
    title: 'Do you want Logout?',
    showCancelButton: true,
    confirmButtonText: `Yes`,
    denyButtonText: `Cancel`,
    icon: 'info',
  }).then((result) => {

    if (result.isConfirmed) {
      this.loginservice.logout()
      window.location.href = "http://localhost:4200/login";
    } else if (result.isDenied) {
      
    }
  });
}
}
