import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IRatingUnit } from '../irating-unit';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent {
  @Input() unit:IRatingUnit ;
  constructor() {
  }

  ngOnInit() {
  }

  @Output() clickOnRating = new EventEmitter<number>();
  clickThis = (rating: number) => {
    console.log(rating)
    this.clickOnRating.emit(rating);
  }
}
