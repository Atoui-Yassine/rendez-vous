import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterCategoryComponent } from './filter-category/filter-category.component';
import { HomeComponent } from './home/home.component';
import { ProfileIdComponent } from './profile-id/profile-id.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

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
        path: "filter",
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
  {
    path: '', children: [
      {
        path: "rendez-vous",
        component:  RendezVousComponent

      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
