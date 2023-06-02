import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfosServiceService } from 'src/app/Services/service/infos-service.service';
import { AppUser } from 'src/app/models/AppUser';

@Component({
  selector: 'app-profile-id',
  templateUrl: './profile-id.component.html',
  styleUrls: ['./profile-id.component.scss']
})
export class ProfileIdComponent implements OnInit{
  isLoading=true
  tab= "about"
  id?: number;
  user?:AppUser;
  constructor(private route:ActivatedRoute,private info:InfosServiceService){}
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const param =params['tab']
        if(param) this.tab =param;
        console.log(this.tab); // price
      }
    );
    this.getData()

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log("id"+this.id);
    });
  }

  getData(){
    setTimeout(()=>{
      this.isLoading  =false
    },300)
  }
public loadUserByID(id:any){
  this.info.loadUserById(id).subscribe((res)=>{
   this
  },
 err=>{
  console.log("Email or Password invalid")
 } 
  )
}

}
