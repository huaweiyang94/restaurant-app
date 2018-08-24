import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurants';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.css']
})
export class AppBodyComponent implements OnInit {
  private restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit() {
    this.getRestaurants();
  }

  public getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      //load the restaurant lists to restaurants property
      this.restaurants = restaurants;
    });
  }

  public deleteRestaurant(restaurant: Restaurant) {
    this.restaurantService.deleteRestaurant(restaurant._id).subscribe(res => {
      // remove element from restaurants array
      this.router.navigate(['']);
      this.restaurants.splice(this.restaurants.indexOf(restaurant), 1);
    });
  }

  public onAddRestaurant(newRestaurant: Restaurant) {
    this.restaurants = this.restaurants.concat(newRestaurant);
    this.router.navigate(['']);
  }

}
