import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationComponent } from './verification/verification.component';
import { LoginRegisterComponent } from './login-register/login-register.component';


const routes: Routes = [
  {
    path: '' ,children:[
      {
        path:"login-register",
        component:LoginRegisterComponent
      },
      
      {
        path:"verification",
        component:VerificationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
