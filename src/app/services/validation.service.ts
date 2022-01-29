import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { regEx } from '../utils/reg-ex';
@Injectable()
export class ValidationService {

  constructor() { }

  getValidatorErrorMessage(ruleName: string, validatorValue?: any) {
    let errorMessage: any = {
      'required': 'The field is required.',
      'minlength': `The field must be at least ${validatorValue.requiredLength} characters long.`,
      'maxlength': `The field cannot be more than ${validatorValue.requiredLength} characters long.`,
      'email': 'Please enter a valid email address.',
      'validEmail': 'Please enter a valid email address i.e yourname@domain.com.',
      'invalidPassword': 'Password must be 8 chars long including at least one lower case letter, one uppercase letter, one number',
      'invalidDomain': 'Please enter email with @gmail.com only',
      'matching': 'Password must match'
    };
    if (errorMessage[ruleName]) {
      return errorMessage[ruleName];
    } else {
      return 'No error message found for <' + ruleName + '>';
    }
  }

  validEmail(control: AbstractControl) {
    const valid = control?.value?.match(regEx.email);
    return valid ? null : { 'validEmail': true };
  }

  matchValidator(matchTo: string, reverse?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent && !!control.parent.value && control.value === (control.parent?.controls as any)[matchTo].value ? null : { matching: true };
    };
  }

}
