import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoadbarComponent } from './components/loadbar/loadbar.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { ProSettingComponent } from './components/pro-setting/pro-setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';



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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
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
