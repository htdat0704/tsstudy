import { Component } from '@angular/core';
import { IRatingUnit } from '../irating-unit';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  ratingUnit: IRatingUnit[] = [
    {
      value: 1,
      active: false,
    },
    {
      value: 2,
      active: false,
    },
    {
      value: 3,
      active: false,
    },
    {
      value: 4,
      active: false,
    },
    {
      value: 5,
      active: false,
    },
    {
      value: 6,
      active: false,
    },
    {
      value: 7,
      active: false,
    },
    {
      value: 8,
      active: false,
    },
    {
      value: 9,
      active: false,
    },
    {
      value: 10,
      active: false,
    }
  ]

  rating:number = 0
  constructor() {
  }

  ngOnInit() {
  }

  clickRating = (rating: number) => {
    this.rating = rating;
    for(let i:number = 0; i< rating; i++){
      this.ratingUnit[i].active = true;
    }
    for(let i: number = this.ratingUnit.length- 1; i>=rating; i --){
      this.ratingUnit[i].active= false;
    }
  }
}
