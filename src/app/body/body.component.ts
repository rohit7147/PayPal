import { Component, OnInit } from '@angular/core';
import { restaurants } from '../utility/inputcsv';
import { Router } from '@angular/router';
import { UniqueCusines } from '../utility/cuisines';
import { ComponentJoin } from '../utility/component.join'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private router: Router, private cj: ComponentJoin) { }

  totalRestaurants: number = restaurants.length;
  display: boolean = false;
  activatedRoute: string ='';
  cuisineObj: UniqueCusines = new UniqueCusines();
  cuisineList: string[] = [];
  selectedCuisine: string[] = [];
  filterDisplay: string[] = [];
  ngOnInit() {
    this.cuisineList = this.cuisineObj.cuisineArray;
    this.cj.filterChipsShared.subscribe(
      resp => {
        this.filterDisplay = [];
      }
    )
    this.cj.restaurantCountShared.subscribe(
      resp => {
        this.totalRestaurants = resp;
      }
    )
    this.cj.activeTabShared.subscribe(
      resp => {
        this.activatedRoute = resp;
      }
    )
  }

  navigateToAll() {
    this.activatedRoute = 'ALL';
    this.router.navigate(['']);
  }

  navigateToRating() {
    this.activatedRoute = 'RATING';
    this.router.navigate(['rating'])
  }

  navigateToVotes() {
    this.activatedRoute = 'VOTES';
    this.router.navigate(['votes'])
  }

  navigateToTwo() {
    this.activatedRoute = 'AVGCOST';
    this.router.navigate(['avgcost'])
  }

  showCusines() {
    this.activatedRoute = 'FILTER'
    this.display = true;

  }

  clearFilter() {
    this.filterDisplay = [];
    this.selectedCuisine = [];
    this.cj.setCuisineList(this.selectedCuisine);
  }

  applyFilter() {
    this.filterDisplay = this.selectedCuisine;
    this.cj.setCuisineList(this.selectedCuisine);
    this.display = false;
  }
}
