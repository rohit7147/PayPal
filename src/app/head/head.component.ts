import { Component, OnInit } from '@angular/core';
import { restaurants } from '../utility/inputcsv';
import { csvInput } from '../utility/csvInterface';
import { ComponentJoin } from  '../utility/component.join';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private cj: ComponentJoin, private router: Router) { }

  selectedRestaurant : csvInput = {
    restaurantId: '',
    restaurantName: '',
    cuisines: '',
    avgCostForTwo: 0,
    currency: '',
    hasTableBooking: '',
    hasOnlineDelivery: '',
    aggregateRating: 0,
    ratingColor: '',
    ratingText: '',
    votes: 0
  };

  filteredRestaurants: Array<csvInput> = [];

  ngOnInit() {
  }

  searchRestaurants(event: any) {
    this.filteredRestaurants = [];
    for (let i = 0; i < restaurants.length; i++) {
      let currentRestaurant = {
        restaurantId: '',
        restaurantName: '',
        cuisines: '',
        avgCostForTwo: 0,
        currency: '',
        hasTableBooking: '',
        hasOnlineDelivery: '',
        aggregateRating: 0,
        ratingColor: '',
        ratingText: '',
        votes: 0
      }
      currentRestaurant = restaurants[i];
      if (currentRestaurant.restaurantName.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredRestaurants.push(currentRestaurant);
      }
    }
  }

  onRestaurantChange(restaurant: csvInput) {
    this.selectedRestaurant = restaurant;
    this.cj.setRestaurantName(restaurant);
    this.cj.setfilterChips([]);
  }

  goHome() {
    this.router.navigate(['all']);
  }
}
