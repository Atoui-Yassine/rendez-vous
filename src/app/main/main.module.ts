import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileIdComponent } from './profile-id/profile-id.component';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileIdComponent,
    FilterCategoryComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
  ]
})
export class MainModule { }
