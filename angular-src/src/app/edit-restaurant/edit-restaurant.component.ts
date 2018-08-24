import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurants';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  private restaurant :any = {};

  constructor(private restaurantService: RestaurantService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.getRestaurant(this.activatedRouter.snapshot.params['id']);
  }

  public getRestaurant(id) {
    this.restaurantService.getRestaurant(id).subscribe(restaurant => {
      this.restaurant = restaurant;
    })
  }

  public onSubmit() {
    this.restaurantService.updateRestaurant(this.restaurant).subscribe(res => {
      this.router.navigate(['/restaurants']);
    });
  }

}
