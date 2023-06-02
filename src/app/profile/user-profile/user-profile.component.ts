import { Component } from '@angular/core';
import { UserSettingServiceService } from 'src/app/Services/service/user-setting-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  constructor(public userSettingStateService: UserSettingServiceService) { }
  displayPro=true;
  display = false;
  onPress() {
    this.display = true;
    this.displayPro=false;
  }
}
