import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import {parsePhoneNumber, PhoneNumber} from 'libphonenumber-js';

export class IonIntlTelInputValidators {
  static phone(control: AbstractControl): ValidationErrors | null {
    const error = { phone: true };
    let phoneNumber: PhoneNumber;

    if (typeof control.value === 'string') {
      try {
        phoneNumber = parsePhoneNumber(control.value);
        if (phoneNumber.isValid()) {
          return null;
        }
      } catch (e) {
        phoneNumber = null;
      }

      if (!phoneNumber) {
        try {
          // If failed to parse, try adding a +1 and see if valid
          if (control.value.length >= 10 && control.value.indexOf('+') === -1) {
            const v = '+1' + control.value;
            phoneNumber = parsePhoneNumber(v);
            if (phoneNumber.isValid()) {
              return null;
            }
          }
        } catch (e) {
          return error;
        }
      }
    }

    if (!control.value) {
      return null; // allow empty to be valid as the required validator can be added if needed
    }

    return error;
  }
}

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ionIntlTelInputValid]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IonIntlTelInputValidatorDirective,
      multi: true,
    },
  ],
})
export class IonIntlTelInputValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return IonIntlTelInputValidators.phone(control);
  }
}
