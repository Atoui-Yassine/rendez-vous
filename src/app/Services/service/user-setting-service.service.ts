import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingServiceService {

  private _showUserSetting = new BehaviorSubject<boolean>(false);

  get showUserSetting() {
    return this._showUserSetting.asObservable();
  }

  toggleUserSetting() {
    this._showUserSetting.next(!this._showUserSetting.value);
  }
}
