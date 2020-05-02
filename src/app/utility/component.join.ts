import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { restaurants } from '../utility/inputcsv';
import { csvInput } from '../utility/csvInterface';

@Injectable({
    providedIn: 'root'
}
)
export class ComponentJoin {
    private cuisineList = new BehaviorSubject<string[]>([]);
    cuisineListShared = this.cuisineList.asObservable();
    private restaurantCount = new BehaviorSubject<number>(restaurants.length);
    restaurantCountShared = this.restaurantCount.asObservable();
    private filterChips = new BehaviorSubject<string[]>([]);
    filterChipsShared = this.filterChips.asObservable();
    private restaurantName = new BehaviorSubject<csvInput>({
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
    });
    restaurantNameShared = this.restaurantName.asObservable();
    private activeTab = new BehaviorSubject<string>('');
    activeTabShared = this.activeTab.asObservable();
    constructor() { }

    setCuisineList(cuisineList: string[]) {
        this.cuisineList.next(cuisineList);
    }

    setRestaurantCount(restaurantCount: number) {
        this.restaurantCount.next(restaurantCount);
    }

    setRestaurantName(restaurantName: csvInput) {
        this.restaurantName.next(restaurantName);
    }

    setActiveTab(tabName: string) {
        this.activeTab.next(tabName);
    }

    setfilterChips(chips: string[]) {
        this.filterChips.next(chips)
    }
}