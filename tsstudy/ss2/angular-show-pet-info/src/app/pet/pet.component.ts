import { Component } from '@angular/core';

import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
  pet: Pet = {
    name: "husky",
    image: 'https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1257560163-scaled-e1610062322469.jpg'
  }
  constructor() { }

  ngOnInit() {
  }
}
