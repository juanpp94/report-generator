import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  restaurant: Restaurant = {'name': '', 'address': '', 'city': '', 'country': ''};
  restaurants: Restaurant[] = [];
  constructor() { }

  addRestaurant() {
    let restaurantsAux = this.getRestaurants();
  }

  getRestaurants(): any {
    let restaurantAux = localStorage.getItem("restaurants");
    return restaurantAux;
  }
}
