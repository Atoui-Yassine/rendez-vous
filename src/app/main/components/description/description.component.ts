import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
 
 
 
 
  separateDialCode = true;
 SearchCountryField = SearchCountryField;
 CountryISO = CountryISO;
 PhoneNumberFormat = PhoneNumberFormat;
 preferredCountries: CountryISO[] = [CountryISO.UnitedStates, 
  CountryISO.UnitedKingdom];

 phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required])
  });
 v:any=this.phoneForm.get('phone');
  public lat:any;
  public lng:any;

 
  constructor(private http: HttpClient) {
    this.http = http; 
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat);
          console.log(this.lng);
          this.getCity(this.lat,this.lng);
          //console.log('hhhhhhhhhhhhhhhhh',this.phoneForm.get('phone')?.value)
        }
      },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  cityName: string='';

  private apiUrl:string = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=';
  getCity(latitude: number, longitude: number){
   
    this.http.get(`${this.apiUrl}${longitude}%2C${latitude}`).subscribe((result: any) => {
      this.cityName = result.address.PlaceName;
      console.log(this.cityName);
      console.log(this.v)
      
      
    });
  
  }


///////////////////




}