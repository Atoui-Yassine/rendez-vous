import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InfosServiceService } from 'src/app/Services/service/infos-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
     constructor(private builder:FormBuilder,private toastr:ToastrService,  private route: Router ,private info:InfosServiceService){}

     searchForm = this.builder.group({
      cat_name :this.builder.control('',Validators.compose([Validators.minLength(1)])),
      //date :this.builder.control('',Validators.compose([Validators.required])),
      country : this.builder.control('',Validators.compose([Validators.minLength(1)])),
     
   });
 
   search():void{
      if(this.searchForm.valid){
        this.info.searchbar(this.searchForm.value).subscribe((res)=>{
          this.toastr.success("Search Success !")
          console.log("eeeeeeeeeeeeeeeeeeeeeeeeeee"+res.content)
         // this.route.navigate(['/filter'])
        }, err=>{
          this.toastr.error(err.error.message)
        })
      }else{
        this.toastr.error("Please enter valid data !")

      }
   }
  
}
