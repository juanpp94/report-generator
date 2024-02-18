import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddRestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    ReactiveFormsModule
  ]
})
export class RestaurantModule { }
