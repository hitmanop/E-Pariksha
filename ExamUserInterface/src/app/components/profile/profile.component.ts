import { Component } from '@angular/core';
import { LoginserviceService } from '../../services/loginservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = null;
  constructor(private loginservice: LoginserviceService) {}

  ngOnInit(): void {
    this.user = this.loginservice.getUser();
  }
}
