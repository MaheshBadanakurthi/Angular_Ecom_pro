import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductAuthService implements CanActivate {
  forLoggin:any;
  forLogginValue:any;
  constructor( private rout:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    let loggedIn=false;
  this.forLoggin=  sessionStorage.getItem('loggedin')
this.forLogginValue=JSON.parse(this.forLoggin)
    if(this.forLogginValue){
      return true;
    }
    else{
      this.rout.navigate(['/login']);
      return false
    }
  }
}
