import { Component } from '@angular/core';
import { Calculator } from '../calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calculator: Calculator = {
    number1: 0,
    number2: 0,
    syntax: "+",
    result: () => {
      switch(this.calculator.syntax){
        case "+":
          return this.calculator.number1 + this.calculator.number2;
        case "-":
          return this.calculator.number1 - this.calculator.number2;
        case "/":
          return this.calculator.number1 / this.calculator.number2;
        case "*":
          return this.calculator.number1 * this.calculator.number2;
        default: 
          return "error"
      }
    },
  }

  result = 0;
  constructor() { }

  ngOnInit() {
  }

  submit = () => {
    this.result = this.calculator.result();
  }

}
