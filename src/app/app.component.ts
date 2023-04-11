import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rendez-vous';
  isLoadingModules = true
  constructor(private route:Router){}
  ngOnInit(): void {
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
}
