import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ErrorLayoutComponent } from './error-layout/error-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    AuthLayoutComponent,
    ErrorLayoutComponent,
    FooterComponent,
    NavbarComponent,
    ProfileLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
