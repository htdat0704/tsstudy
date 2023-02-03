import { Component } from '@angular/core';
import { Register } from '../register';
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  register : Register = {
    email: "",
    password: "",
    country: "",
    age: 0,
    gender: false,
    phone: ""
  };
  error: string = "";

  // registerForm! : FormGroup;
  // registerForm : FormGroup | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.registerForm = new FormGroup({
    //   email: new FormControl(""),
    //   password: new FormControl(""),
    //   passwordConfirm: new FormControl(""),
    //   country: new FormControl(""),
    //   age: new FormControl(0),
    //   gender: new FormControl(false),
    //   phone: new FormControl("")
    // })
    
  }

  registerForm =this.fb.group({
    email: ["",[Validators.required,Validators.minLength(16)]],
    password: "",
    passwordConfirm: "",
    country: "",
    age: 0,
    gender: false,
    phone: ""
  })

  onChange(){
    if(this.registerForm.status === "VALID"){
      this.error = "";
    }
  }

  onSubmit(){
    for(let control in this.registerForm.controls){
      if(Object.assign(this.registerForm.controls)[control].status === "INVALID"){
        this.error = control + " is wrong format!";
        break;
      }
    }

    console.log(this.error.toUpperCase())
    // console.log(this.registerForm.value)
    console.log(this.registerForm)
  }
}
