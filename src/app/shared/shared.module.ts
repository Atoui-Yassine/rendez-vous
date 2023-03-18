import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    MenuComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
