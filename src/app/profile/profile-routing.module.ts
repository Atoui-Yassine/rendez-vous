import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProProfileComponent } from './pro-profile/pro-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RolesGuard } from '../Services/guards/roles.guard';

const routes: Routes = [
  // {
  //   path: 'profile_user',
  //   component: UserProfileComponent,
  //   canActivate: [RolesGuard],
  //   data:{role:"ROLE_USER",redirecUrl:"403"}
  // },
  // {
  //   path: 'profile',
  //   component: ProProfileComponent,
  //   canActivate: [RolesGuard],
  //   data:{role:"ROLE_PRO",redirecUrl:"403"}
  // }
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'profile', component: UserProfileComponent, data: { role: 'ROLE_USER' } },
  { path: 'profile', component: ProProfileComponent, data: { role: 'ROLE_PRO' } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
