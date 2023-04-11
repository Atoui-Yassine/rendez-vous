import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit{
  container:HTMLElement | undefined;
  infoMessage = '';
  constructor(private builder:FormBuilder){}

    ngOnInit(): void {
        
    }
  signIn(){
    this.container=document.getElementById('container') as HTMLElement;
   this.container.classList.remove("right-panel-active");
   this.infoMessage='';
  
   console.log(this.f);
   
  }
  
  signUp(){
    this.container=document.getElementById('container') as HTMLElement;
    this.registerForm.reset();
    this.registerForm.controls.name.clearValidators();
    this.registerForm.controls.name.updateValueAndValidity();
    this.registerForm.controls.email.clearValidators();
    this.registerForm.controls.email.updateValueAndValidity();
    this.container.classList.add("right-panel-active");
  }

  registerForm = this.builder.group({
    name :this.builder.control('',Validators.compose([Validators.required,Validators.minLength(3)])),
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


register(){
  if(this.registerForm.valid){
    this.infoMessage = 'Registration Successful! Please Login!';
    this.signIn()
  }else{
    this.infoMessage = 'Please enter valid data !';
  }

}

}
