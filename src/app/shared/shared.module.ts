import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoadbarComponent } from './components/loadbar/loadbar.component';



@NgModule({
  declarations: [
    MenuComponent,
    SearchBarComponent,
    LoadbarComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports:[
    MenuComponent,
    SearchBarComponent,
    LoadbarComponent
  ]
})
export class SharedModule { }
