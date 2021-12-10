import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from "@angular/core";
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private _router: Router, private authService: AuthService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.authService.isUserLoggedIn()){
      alert("FORBIDDEN")
      this._router.navigate(['login']),{queryParams: {retUrl: route.url}}
      return false
    }

    return true
  }
}
