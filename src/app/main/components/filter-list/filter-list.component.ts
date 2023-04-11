import { Component, OnInit } from '@angular/core';
import cat from '../../../shared/category.json';
import { Category } from 'src/app/models/Category';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
})
export class FilterListComponent implements OnInit {
  categories: Category[] = cat;
  categorySelected?: Category;
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.initFilters();
  }

  filterClick(id: string, filtername: string) {
    this.route.navigate(
      ['/filter'],

      {
        queryParams: { [filtername]: id },
        queryParamsHandling: 'merge',
        relativeTo: this.activatedRoute,
      }
    );
  }

  categorieChange(item: Category) {
    this.categorySelected = item;
    this.filterClick(item.id.toString(), 'cat_id');
  }

  initFilters() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const param1 = params['cat_id'];
      console.log("cat_id",param1)
      if (param1) {
        this.setFiltersFromList(param1);
      }
    });
    console.log("cat selected",this.categorySelected)
  }

  setFiltersFromList(id:number){
    this.categorySelected= this.categories.find((cat)=>cat.id ==id)
  }

  getCategoties(): Category[] {
    if(!this.categorySelected) return this.categories.filter((cat)=>cat.parent ==null)

    return  this.categories.filter((cat)=>cat.parent ==this.categorySelected?.parent)
  
  }
  getSubCategories():Category[] |null{
    if(!this.categorySelected) return null
    return this.categories.filter((cat)=>cat.parent ==this.categorySelected?.id)
  }

  backToParent(){
    this.categorySelected = this.categories.find(cat=> cat.id ==this.categorySelected?.parent)
  }

  // todo verif the subcategory disablation
  subCategoryDisabled():boolean{
 
      return this.getCategoties() ==null || this.getCategoties().length==0
  }
}
