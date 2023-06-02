import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/Services/service/auth.service';
import { UserSettingServiceService } from 'src/app/Services/service/user-setting-service.service';
import { loggedin } from 'src/app/models/logedin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user?: loggedin | null
  dropdown: string = '';
  
  constructor(public auth: AuthService, private route: Router,private userSettingStateService:UserSettingServiceService) { }
  ngOnInit(): void {
    this.auth.currentUser$.subscribe(res => {
      if (res) {
        this.user = res
      }
    })
  }
  dopdownClick(value: string) {
    this.dropdown = value == this.dropdown ? '' : value;

  }
  profileNavigation() {
    //const userRole = this.auth.getUserRole(this.user);
    // console.log(userRole)
    // if (userRole === 'ROLE_USER') {
    //   this.route.navigate(['/user-profile']);
    //   console.log("user role")
    // } else if (userRole === 'ROLE_PRO') {
    //   console.log("pro role")
    //   this.route.navigate(['/pro-profile']);
    // }else{
    //   console.log("not role")
    // }
    this.auth.currentUser$.pipe(take(1)).subscribe(res=>{
      if(res){
        this.route.navigate(['/profile_user'])
      }
    })

  }

  logout(){
    this.auth.logout()
  }
 
  onSettingsClick() {
    this.userSettingStateService.toggleUserSetting();
  }
 // userRole = this.auth.getUserRole(this.user)?.toString;

  loadProfileComponent() {
    const userRole = this.auth.getUserRole(this.user);
    if (userRole === 'ROLE_USER') {
      this.route.navigate(['/profile'], { queryParams: { role: 'ROLE_USER' } });
      console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuu"+userRole);
    } else if (userRole === 'ROLE_PRO') {
      console.log("rrrrrrrrrrrrrrrrrrrrrrr"+userRole);
      this.route.navigate(['/profile'], { queryParams: { role: 'ROLE_PRO' } });
    }
  }
}
