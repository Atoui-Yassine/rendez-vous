import { Component, OnInit } from '@angular/core';
import { UserSettingServiceService } from 'src/app/Services/service/user-setting-service.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  display:boolean=true;
  showUserSetting = false;

  constructor(private userSettingStateService: UserSettingServiceService) { }

  ngOnInit() {
    this.userSettingStateService.showUserSetting.subscribe(show => {
      this.showUserSetting = show;
    });
  }
  goback(display:boolean) {
    display = !display;
   
  }
  
}
