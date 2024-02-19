import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from 'src/app/models/restaurant';
import { AlertsService } from 'src/app/services/alerts.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent {

  addRestaurantForm = new FormGroup( {
    name: new FormControl('', Validators.required),
    country: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),

  });

  emptyCountryError: boolean = false;
  emptyCityError: boolean = false;
  country: string = "";
  city: string = "";
  errorMessage: string = ""; 

 

  constructor(private _alertService: AlertsService, private _restaurantService: RestaurantsService) {

  }

  countries: any[] = [{'name':'Seleccione un país', 'id':-1},{'name':'USA1', 'id': 0},{'name':'USA2', 'id': 1},{'name':'USA3', 'id':2}]
  cities: any[] = [{'name':'Seleccione un estado', 'id':-1},{'name':'city1', 'id': 0},{'name':'city2', 'id': 1},{'name':'city3', 'id':2}]
  
  /**
   * Method that validate the restaurant information
   */
  validateRestaurantInformation() {
    console.log("Info:",this.addRestaurantForm.value);
    let restaurantAux = this.addRestaurantForm.value;
    if(!this.validName(restaurantAux['name']!) && !this.validAddress(restaurantAux['address']!) && !this.validCity(restaurantAux['city']!) && !this.validCountry())  {
      this._alertService.setErrorMessage("Todos los campos son requeridos");
    }
    else {
      if(this.addRestaurantForm.valid) {
        this._alertService.setSuccessfulMessage("El restaurante se ha agregado exitosamente","Restaurante Agregado");
        this.setRestaurantInformation(restaurantAux);
      }
    }
    
  }

  /**
   * Function to validate if the name is valid
   * @param nameAux 
   * @returns 
   */
  validName(nameAux: string) : boolean {
    if(nameAux === '') {
      this.errorMessage = "El nombre es un campo requerido.";
      return false;
    } else {
      this.errorMessage = "";
      return true;
    }
  }
  /**
   * Function to validate if the address is valid.
   * @param addressAux 
   * @returns 
   */
  validAddress(addressAux: string): boolean {
    if(addressAux === '') {
      this.errorMessage = "La dirección es un campo requerido.";
      return false;
    } else {
      this.errorMessage = "";
      return true;
    }
  }

  /**
   * Function to validate if the city is valid
   * @param cityAux 
   * @returns 
   */
  validCity(cityAux: string =  ""): boolean {
    if(cityAux === '' || cityAux === this.cities[0]['name']) {
      this.errorMessage = "La ciudad es un campo requerido.";
      this.emptyCityError = true;
      return false;
    } else {
      this.errorMessage = "";
      this.emptyCityError = false;
      return true;
    }
    
  }

  /**
   * Function to validate if the country is valid
   * @returns 
   */
  validCountry(): boolean {

    if(this.country === '' || this.country === this.countries[0]['name']) {
      this.emptyCountryError = true;
      this.errorMessage = "El país es un campo requerido.";
      return false
    } else {
      this.errorMessage = "";
      this.emptyCountryError = false;
      return true;
    }
  }

  /**
   * Method to set the restaurant information
   * @param restaurantAux 
   */
  setRestaurantInformation(restaurantAux: any): void {
    this._restaurantService.restaurant.name = restaurantAux.name!;
        this._restaurantService.restaurant.address = restaurantAux.address!;
        this._restaurantService.restaurant.city = restaurantAux.city!;
        this._restaurantService.restaurant.country = restaurantAux.country!;
  }

 

}
