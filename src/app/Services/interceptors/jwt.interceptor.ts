import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { loggedin } from 'src/app/models/logedin';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  userlogedin !:loggedin ;

  today = new Date();
  baseUrl = environment.apiurl
 // refreshToken ={} as refreshTokenModel
  constructor(private auth :AuthService,private http:HttpClient) {
   
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.auth.currentUser$.pipe(take(1)).subscribe(res=>{
      if(res){
        this.userlogedin = res
        //this.refreshToken.refreshToken=res.refresh_Token
      } 
     
    })
    

    if(this.userlogedin){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${this.userlogedin.accessToken}`
        }
      })
     
      
    }
    console.log("aaaaaaaaaaaaaaa",this.userlogedin,request.headers);
    return next.handle(request);
  }
}
