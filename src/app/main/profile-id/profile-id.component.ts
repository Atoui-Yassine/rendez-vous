import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-id',
  templateUrl: './profile-id.component.html',
  styleUrls: ['./profile-id.component.scss']
})
export class ProfileIdComponent implements OnInit{
  isLoading=true
  tab= "about"
  constructor(private route:ActivatedRoute){}
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        const param =params['tab']
        if(param) this.tab =param;
        console.log(this.tab); // price
      }
    );
    this.getData()
  }

  getData(){
    setTimeout(()=>{
      this.isLoading  =false
    },300)
  }
}
