import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private appService:AppService, private router: Router){}

  canActivate():boolean{
    if(this.appService.loggedIn()){
      return true
    }else{
      this.router.navigate([''])
      return false
    }
  }
  
}
