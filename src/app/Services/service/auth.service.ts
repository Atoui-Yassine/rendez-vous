import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, map } from 'rxjs';
import { loggedin } from 'src/app/models/logedin';
import { refreshTokenModel } from 'src/app/models/refreshToken';
import { environment } from 'src/environments/environment.prod';
import { InfosServiceService } from './infos-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSource = new ReplaySubject<loggedin | null>(1);
  currentUser$ = this.currentUserSource.asObservable();
  userRole: string = '';
  apiUrl = environment.apiurl
  refreshTokenmodel !: refreshTokenModel
  
  constructor(private http: HttpClient,
    private route: Router,
    private info: InfosServiceService) { }
   

  login(model: any) {
    return this.http.post<loggedin>(this.apiUrl + "auth/signin", model).pipe(
      map((res: any) => {
        const user = res;
        if (user) {
          this.setCurrentUser(user)
          this.redirectUser(user.roles)

        }
      })
    )
  }
  public register(model: any, url: String): Observable<any> {
    return this.http.post<any>(this.apiUrl + "auth/signup", model);
  }
  setCurrentUser(user: loggedin) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
  }
  redirectUser(roles: String[]) {
    switch (roles[0]) {
      case "ROLE_ADMIN":
        this.route.navigateByUrl('/admin')
        break;
      case "ROLE_PRO" :
          this.route.navigateByUrl('/')  
          break;
      default:
        this.route.navigateByUrl("/");
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.route.navigateByUrl("/")
  }

  getUserRole(user: loggedin | undefined | null) {
    if(user !=undefined && user != null){
      switch (user.roles[0]) {
        case "ROLE_ADMIN":
          return this.userRole = "ROLE_ADMIN";
        case "ROLE_PRO":
          return this.userRole = "ROLE_PRO";
        default:
          return this.userRole = "ROLE_USER";
      }
    }else{
      console.log("user not found")
      return;
    
    }
    
  }

 
}
