import { AbstractControl, ValidationErrors } from '@angular/forms';
export class MatchValidator(control: AbstractControl): ValidationErrors | null => {
    const password = control.get("password")?.value
    const confirm = control.get("confirm")?.value

    if(password!=confirm){
      return {'noMatch':true}
    }

    return null
  }
