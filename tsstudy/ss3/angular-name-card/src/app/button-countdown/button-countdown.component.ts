import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-countdown',
  templateUrl: './button-countdown.component.html',
  styleUrls: ['./button-countdown.component.css']
})
export class ButtonCountdownComponent {
  @Input() label:string;
  @Output() clickOn = new EventEmitter<void>();
  constructor() {
  }

  ngOnInit() {
  }

  click = () => {
    this.clickOn.emit();
  }
}
