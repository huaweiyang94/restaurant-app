import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { Restaurant } from '../models/restaurants';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  private newRestaurant :Restaurant;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.newRestaurant = {
      name: '',
      address: '',
      description: '',
      reviews: '',
      imageUrl: ''
    }
  }

  public onSubmit() {
    this.restaurantService.createRestaurant(this.newRestaurant).subscribe(res => {
      if (res) {
        console.log(res);
        this.addRestaurant.emit(this.newRestaurant);
        this.router.navigate(['/restaurants']);
      }
    });
  }

  @Output() addRestaurant: EventEmitter<Restaurant> = new EventEmitter<Restaurant>();

}
