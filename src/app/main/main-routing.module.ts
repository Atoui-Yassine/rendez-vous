import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { HomeComponent } from './home/home.component';
import { ProfileIdComponent } from './profile-id/profile-id.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "filter/:id",
        component: FilterCategoryComponent
      }
    ]
  },
  {
    path: '', children: [
      {
        path: "profile/:id",
        component: ProfileIdComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
