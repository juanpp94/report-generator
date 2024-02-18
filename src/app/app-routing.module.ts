import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantModule } from './modules/restaurant/restaurant.module';

const routes: Routes = [
  {
    path: 'restaurants',
    loadChildren: () => import('./modules/restaurant/restaurant.module').then( m => m.RestaurantModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RestaurantModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
