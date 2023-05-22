import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoadbarComponent } from './components/loadbar/loadbar.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { ProSettingComponent } from './components/pro-setting/pro-setting.component';



@NgModule({
  declarations: [
    MenuComponent,
    SearchBarComponent,
    LoadbarComponent,
    UserSettingsComponent,
    ProSettingComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports:[
    MenuComponent,
    SearchBarComponent,
    LoadbarComponent,
    UserSettingsComponent,
    ProSettingComponent
  ]
})
export class SharedModule { }
