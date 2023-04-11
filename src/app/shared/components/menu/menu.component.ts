import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
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
    },
    {
      id: 5,
      src:'../../../../assets/images/imgcarousel/retaurant.jpg',
      alt:'retaurant',
      title:'retaurant'
    },
    {
      id: 6,
      src:'../../../../assets/images/imgcarousel/retaurant.jpg',
      alt:'retaurant',
      title:'retaurant'
    },
    {
      id: 7,
      src:'../../../../assets/images/imgcarousel/retaurant.jpg',
      alt:'retaurant',
      title:'retaurant'
    },
    {
      id: 8,
      src:'../../../../assets/images/imgcarousel/retaurant.jpg',
      alt:'retaurant',
      title:'retaurant'
    }
  ]

  constructor(private route:Router) { }
 customOptions: OwlOptions = {
   loop: true,
   mouseDrag: true,
   touchDrag: false,
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
     900: {
       items: 5
     }
     ,
     1100: {
       items: 7
     }
   },
  //  autoplay:true,
  //   autoplayTimeout:10,
  //   autoplayHoverPause:true,
    nav: false
 };
/////////////////////////////////////
navigateToProfile(id: any) {
  this.route.navigate(
    ['/filter'],
    { queryParams: { cat_id: id } }
  );
}
}
