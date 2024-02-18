import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  countries: any[] = [{'name':'Seleccione un país', 'id':-1},{'name':'USA1', 'id': 0},{'name':'USA2', 'id': 1},{'name':'USA3', 'id':2}]
  cities: any[] = [{'name':'Seleccione un estado', 'id':-1},{'name':'city1', 'id': 0},{'name':'city2', 'id': 1},{'name':'city3', 'id':2}]
  /**
   * Method that validate the restaurant information
   */
  validateRestaurantInformation() {
    console.log("Info:",this.addRestaurantForm.value);
  }

}
