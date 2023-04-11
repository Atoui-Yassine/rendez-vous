import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileIdComponent } from './profile-id/profile-id.component';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchMapComponent } from './components/search-map/search-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ProListComponent } from './components/pro-list/pro-list.component';
import { CustumMarkerComponent } from './components/custum-marker/custum-marker.component';
import { MarkerInfoComponent } from './components/marker-info/marker-info.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { DateCalendarComponent } from './components/date-calendar/date-calendar.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DescriptionComponent } from './components/description/description.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent,
    ProfileIdComponent,
    FilterCategoryComponent,
    HeaderComponent,
    SearchMapComponent,
    ProListComponent,
    CustumMarkerComponent,
    MarkerInfoComponent,
    FilterListComponent,
    SearchItemComponent,
    RendezVousComponent,
    DateCalendarComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    CarouselModule,
    GoogleMapsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    HttpClientModule,
    TooltipModule.forRoot()

  ]
})
export class MainModule { }
