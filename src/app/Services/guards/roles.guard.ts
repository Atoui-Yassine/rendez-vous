import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { loggedin } from 'src/app/models/logedin';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  userlogedin : loggedin | null =null
  constructor(private auth: AuthService,private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    let role = route.data['role'] as string
    let redirecUrl=route.data['redirecUrl'] as string
    this.auth.currentUser$.pipe(take(1)).subscribe(res => {
      this.userlogedin=res
      
    })
    if(this.userlogedin && this.userlogedin.roles.includes(role)){
      return true;
    }
    this.route.navigate([redirecUrl || '403'])
    return false;
  }

  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  //     console.log("init")
  //     if(childRoute.data != undefined){
  //       let role = childRoute.data['role'] as string
  //       this.auth.currentUser$.pipe(take(1)).subscribe(res => {
  //         if (res) {
  //           this.userlogedin = res
  //         }
  //       })
  //       console.log("22222222222",this.userlogedin.roles)
  //         console.log("22222222222",role)
  //         console.log("22222222222",this.userlogedin?.roles.includes(role))
  //       if (this.userlogedin?.roles.includes(role)){

  //         return true;
  //       } 
  //     }else{
  //       console.log("else")
  //     }

  //   return false;
  // }
}
