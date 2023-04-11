import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dynamicSlides = [
    {
      id: 1,
      src:'../../../../assets/images/imgcarousel/mecanicin.jpg',
      alt:'mecanicin',
      title:'mecanicin'
    },
    {
      id: 2,
      src:'../../../../assets/images/imgcarousel/medecin.jpg',
      alt:'medecin',
      title:'medecin'
    },
    {
      id: 3,
      src:'../../../../assets/images/imgcarousel/plombier.jpg',
      alt:'plombier',
      title:'plombier'
    },
    {
      id: 4,
      src:'../../../../assets/images/imgcarousel/retaurant.jpg',
      alt:'retaurant',
      title:'retaurant'
    }
  ]

  constructor() { }
 customOptions: OwlOptions = {
   loop: true,
   mouseDrag: true,
   touchDrag: true,
   pullDrag: false,
   dots: false,
   navSpeed: 500,
   navText: ['', ''],
   responsive: {
     0: {
       items: 1 
     },
     400: {
       items: 1
     },
     760: {
       items: 1
     },
     1000: {
       items: 1
     }
   },
   autoplay:true,
    autoplayTimeout:10,
    autoplayHoverPause:true,
   nav: false
 }
}
