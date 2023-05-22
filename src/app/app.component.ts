import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { AuthService } from './Services/service/auth.service';
import { InfosServiceService } from './Services/service/infos-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'rendez-vous';
  isLoadingModules = true
  constructor(private route:Router , private auth:AuthService,private infoUser:InfosServiceService){}
  InitModuleProgressbar(): void {
    // let spinner =document.getElementById("spinner-g")
    this.route.events.subscribe(event=>{
      if (event instanceof RouteConfigLoadStart) {
       this.isLoadingModules =true
      }
      if (event instanceof RouteConfigLoadEnd) {
        this.isLoadingModules=false
        
      }
    })
  }
  ngOnDestroy(): void {
    this.auth.logout();
    this.infoUser.logout();
  
  }
  ngOnInit(): void {
    this.setcurrentUser();
   this.InitModuleProgressbar()
  }
  setcurrentUser(){
    const item=localStorage.getItem('user')
    if(item != null){
      this.auth.setCurrentUser(JSON.parse(item))
      this.infoUser.loadUser()
    }
    

}
}
