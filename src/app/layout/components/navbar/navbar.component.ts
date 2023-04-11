import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  dropdown:string='';
  dopdownClick(value :string){
  this.dropdown= value==this.dropdown?'':value;

 }
}
