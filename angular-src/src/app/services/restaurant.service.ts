import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../models/restaurants';

import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  private apiServer = 'http://localhost:3000';

  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`${this.apiServer}/restaurants`)
      .map(res => {
        return res['data'] as Restaurant[];
    });
  }

  public getRestaurant(id: string) {
    return this.http.get(`${this.apiServer}/restaurants/${id}`)
      .map(res => {
        return res['data'] as Restaurant;
      });
  }

  public createRestaurant(restaurant: Restaurant) {
    return this.http.post(`${this.apiServer}/restaurants`, restaurant);
  }

  public updateRestaurant(restaurant: Restaurant) {
    return this.http.put(`${this.apiServer}/restaurants`, restaurant);
  }

  public deleteRestaurant(id: string) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(`${this.apiServer}/restaurants/${id}`, {headers: headers})
      .map(res => {
        return res;
      });
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
