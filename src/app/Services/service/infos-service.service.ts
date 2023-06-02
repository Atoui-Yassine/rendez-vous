import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';
import { AppUser ,infoUser} from 'src/app/models/AppUser';
import { EduExp } from 'src/app/models/Experience';
import { ExpAndEdu } from 'src/app/models/ExperienceAndEducation';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InfosServiceService {
  baseurl=environment.apiurl
  educationExperince ?: ExpAndEdu 
  eductions:EduExp[] = []
  experiences:EduExp[] = []
  user?:AppUser

  private currentUserSource=new ReplaySubject<AppUser >(1) ;
  UserInfo$ =this.currentUserSource.asObservable();

   constructor(private Http:HttpClient) { }

   loadUser(){
    //  if(this.user) return this.UserInfo$
//console.log("11111111111111111111",this.Http.get<AppUser>(this.baseurl+"user/info"))
    return this.Http.get<AppUser>(this.baseurl+"user").subscribe(res=>{
     
      if(res) this.currentUserSource.next(res)
    })
   

  }
  updateInfo(model:any){

   
   
    return this.Http.post<AppUser>("http://localhost:8080/api/user",model)
                      .pipe(
                        map(res=>{
                          if(res){
                            this.currentUserSource.next(res)
                          } 
                          return res
                        })
                      )
                    }

  logout(){
    this.currentUserSource.unsubscribe();
  }

  

  loadinfo(){
    return this.Http.get<AppUser>(this.baseurl+"user")
  }

public searchbar(model:any): Observable<any>{
    return this.Http.get<any>(this.baseurl+ "user/search", model);
}

 public loadUserpro():Observable<any>{
  return this.Http.get<any>(this.baseurl+"user/pro");
 }

 public loadUserById(id:any):Observable<any>{
  return this.Http.get<any>(this.baseurl+"user", id)
 }
}
