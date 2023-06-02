import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { AppUser } from 'src/app/models/AppUser';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-pro-list',
  templateUrl: './pro-list.component.html',
  styleUrls: ['./pro-list.component.scss']
})
export class ProListComponent implements OnInit {
  users?: AppUser[];
  src=environment.apibas;
  constructor(private userService:InfosServiceService,private router:Router){}
 
  ngOnInit() {
    this.userService.loadUserpro()
      .subscribe(users => {
        this.users = users;
        console.log('=====================user===============');
        console.log(users[1]);
        console.log('====================================');
      });
  }

  navigateToProfile(id:any){
    
      this.router.navigate(['/profile', id]);
    
  }


}
