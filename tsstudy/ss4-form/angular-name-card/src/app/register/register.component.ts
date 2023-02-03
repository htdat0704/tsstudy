import { Component } from '@angular/core';
import { Register } from '../register';
import {FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// export const passValidation = (control: FormGroup): { [key: string]: boolean } | null => {
//   const password = control.get('password');
//   const confirmPassword = control.get('passwordConfirm');

//   return password !== confirmPassword ? { isError: true } : null;
// }

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

  createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

        return !passwordValid ? {passwordStrength:true}: null;
    }
}

  registerForm =this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required,Validators.minLength(6),this.createPasswordStrengthValidator]],
    passwordConfirm: ["",[Validators.required,Validators.minLength(6),this.createPasswordStrengthValidator]],
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
