import { CanActivateFn, Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import {inject} from '@angular/core'



export const adminGuard: CanActivateFn = (route, state) => {

const loginservice=inject(LoginserviceService)
const router=inject(Router)


if(loginservice.isLoggedIn()==true && loginservice.getUserRole()=='ADMIN'){
  return true;
}

router.navigate(['login'])
  return false;
};
