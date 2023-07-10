import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class IonIntlTelInputValidators {
    static phone(control: AbstractControl): ValidationErrors | null;
}
export declare class IonIntlTelInputValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonIntlTelInputValidatorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IonIntlTelInputValidatorDirective, "[ionIntlTelInputValid]", never, {}, {}, never, never, false, never>;
}
