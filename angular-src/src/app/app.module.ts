import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantService } from './services/restaurant.service';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBodyComponent,
    AddRestaurantComponent,
    EditRestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        redirectTo: 'restaurants',
        pathMatch: 'full'
      },
      {
        path: 'restaurants',
        component: AppBodyComponent
      },
      {
        path: 'add',
        component: AddRestaurantComponent
      },
      {
        path: 'edit/:id',
        component: EditRestaurantComponent
      }
    ])
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
