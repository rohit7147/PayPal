import { Component, OnInit } from '@angular/core';
import { restaurants } from '../utility/inputcsv';
import { csvInput } from '../utility/csvInterface';
import { ComponentJoin } from '../utility/component.join';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  constructor(private cj: ComponentJoin) { }

  allRestaurants: Array<csvInput> = [];
  cuisineList: string[];

  ngOnInit() {
    this.cj.setActiveTab('ALL');
    this.cj.restaurantNameShared.subscribe(
      resp => {
        this.allRestaurants = [];
        if (resp.restaurantName != '') {
          this.allRestaurants.push(resp);
          this.cj.setRestaurantCount(this.allRestaurants.length);
        } else {
          this.allRestaurants = restaurants;
          this.cj.setRestaurantCount(this.allRestaurants.length);
        }
      }
    )
    this.cj.cuisineListShared.subscribe(
      resp => {
        this.cuisineList = resp;
        this.allRestaurants = [];
        if (this.cuisineList.length > 0) {
          for (let i = 0; i < this.cuisineList.length; i++) {
            let cuisineName = this.cuisineList[i];
            for (let j = 0; j < restaurants.length; j++) {
              let cuisineArray = restaurants[j].cuisines.split(',');
              if (cuisineArray.includes(cuisineName)) {
                this.allRestaurants.push(restaurants[j]);
              }
            }
          }
          this.cj.setRestaurantCount(this.allRestaurants.length);
        } else {
          this.allRestaurants = restaurants;
          this.cj.setRestaurantCount(this.allRestaurants.length);
        }
      }
    )
  }

  getBackGroundColor(rating: number) {
    let color = 'white';
    if (rating == 0) {
      return color;
    } else if (rating >= 3 && rating <= 3.4) {
      color = 'orange';
    } else if (rating >= 3.5 && rating <= 3.9) {
      color = 'yellow';
    } else if (rating >= 4 && rating <= 4.4) {
      color = 'green';
    } else {
      color = 'darkgreen';
    }
    return color;
  }

  getColor(rating: number) {
    if (rating == 0 || (rating >= 3.5 && rating <= 3.9)) {
      return '#535665';
    } else {
      return '#fff';
    }
  }

}
