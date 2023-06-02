import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryService } from 'src/app/Services/service/category.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService:CategoryService,private route:Router){}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe( categories => {
      this.categories = categories;
      console.log('================catt====================');
      console.log(categories);
      console.log('====================================');
    },
    error => {
      console.error('Error retrieving categories:', error);
      // Handle error
    }
    );
  }
 

 
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
