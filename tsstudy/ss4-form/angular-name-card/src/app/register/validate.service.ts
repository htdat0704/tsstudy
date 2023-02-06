import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ValidationService {
    constructor() {}

    passwordMatch() {
        return (formGroup: AbstractControl) : ValidationErrors | null=> {
          const passwordControl = formGroup.get("password");
          const confirmPasswordControl = formGroup.get("passwordConfirm");

          if (!passwordControl || !confirmPasswordControl) {
            return null;
          }

            
          if (passwordControl?.value !== confirmPasswordControl?.value) {
            confirmPasswordControl?.setErrors({ passwordMismatch: true });
            return { passwordMismatch: true };
          } else {
            confirmPasswordControl?.setErrors(null);
            return null;
          }
        };
    }

    regexPhone(): ValidatorFn {
        return (control: AbstractControl) : {[key: string] : any} | null => {
            if (!control.value) {
                return null;
              }
            //   const regex = new RegExp(
            //     '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@#$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$'
            //   );
              const regex = new RegExp(/^\+84\d{9,10}$/);
              const valid = regex.test(control.value);
              return valid ? null : { invalidPhone: true };
        }
    }

    ageGreaterThan18(): ValidatorFn {
            return (control: AbstractControl) : ValidationErrors | null => {
                if (+control.value > 18) {
                    return null;
                  } else {
                    return { ageLessThan18: true };
                  }
            }
        }
  }
  