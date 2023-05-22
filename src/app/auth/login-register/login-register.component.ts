import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/service/auth.service';
import { InfosServiceService } from 'src/app/Services/service/infos-service.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit{
  container:HTMLElement | undefined;
  message !:string;


  constructor(private builder:FormBuilder,private toastr:ToastrService , private auth:AuthService,private info:InfosServiceService, private route: Router ){}

    ngOnInit(): void {
   
        
    }
  signIn(){
    this.container=document.getElementById('container') as HTMLElement;
   this.container.classList.remove("right-panel-active");
  
  }
  
  signUp(){
    this.container=document.getElementById('container') as HTMLElement;
    this.registerForm.reset();
   
    this.container.classList.add("right-panel-active");
  }

  registerForm = this.builder.group({
    lastname :this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)])),
    firstname :this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)])),
    email : this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    password :this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)]))
 
 });

 get f(){
  return this.registerForm.controls;
}
loginForm = this.builder.group({
 email : this.builder.control('',Validators.compose([Validators.required,Validators.email])),
 password :this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)]))

});


register():void{
  if(this.registerForm.valid){
    this.auth.register(this.registerForm.value,"user").subscribe((res)=>{
      this.toastr.success("Register Success !")
      this.signIn()
    },
      err=>{
        this.toastr.error(err.error.message)
      }
    )
   
  }else{
    this.toastr.error("Please enter valid data !")

  }

}
login():void{
  this.auth.login(this.loginForm.value).subscribe((res)=>{
    this.toastr.success("Conncté ...")
    this.info.loadUser()
    //this.route.navigate(['.']);
  },
 err=>{
  this.toastr.error("Email or Password invalid")
 } 
  )
}

}
