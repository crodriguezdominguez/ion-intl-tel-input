import { Directive } from '@angular/core';
import { NG_VALIDATORS, } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';
import * as i0 from "@angular/core";
export class IonIntlTelInputValidators {
    static phone(control) {
        const error = { phone: true };
        let phoneNumber;
        if (typeof control.value === 'string') {
            try {
                phoneNumber = PhoneNumberUtil.getInstance().parse(control.value, null);
                if (PhoneNumberUtil.getInstance().isValidNumber(phoneNumber)) {
                    return null;
                }
            }
            catch (e) {
                phoneNumber = null;
            }
            if (!phoneNumber) {
                try {
                    // If failed to parse, try adding a +1 and see if valid
                    if (control.value.length >= 10 && control.value.indexOf('+') === -1) {
                        const v = '+1' + control.value;
                        phoneNumber = PhoneNumberUtil.getInstance().parse(v, null);
                        if (PhoneNumberUtil.getInstance().isValidNumber(phoneNumber)) {
                            return null;
                        }
                    }
                }
                catch (e) {
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
export class IonIntlTelInputValidatorDirective {
    validate(control) {
        return IonIntlTelInputValidators.phone(control);
    }
}
/** @nocollapse */ IonIntlTelInputValidatorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
/** @nocollapse */ IonIntlTelInputValidatorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonIntlTelInputValidatorDirective, selector: "[ionIntlTelInputValid]", providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: IonIntlTelInputValidatorDirective,
            multi: true,
        },
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ionIntlTelInputValid]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: IonIntlTelInputValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL2lvbi1pbnRsLXRlbC1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQ0wsYUFBYSxHQUlkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUVyRSxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBd0I7UUFDbkMsTUFBTSxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxXQUF3QixDQUFDO1FBRTdCLElBQUksT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNyQyxJQUFJO2dCQUNGLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZFLElBQUksZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDNUQsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixJQUFJO29CQUNGLHVEQUF1RDtvQkFDdkQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQ25FLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO3dCQUMvQixXQUFXLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzNELElBQUksZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTs0QkFDNUQsT0FBTyxJQUFJLENBQUM7eUJBQ2I7cUJBQ0Y7aUJBQ0Y7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1YsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjtTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsQ0FBQywyRUFBMkU7U0FDekY7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjtBQWFELE1BQU0sT0FBTyxpQ0FBaUM7SUFDNUMsUUFBUSxDQUFDLE9BQXdCO1FBQy9CLE9BQU8seUJBQXlCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xELENBQUM7O2lKQUhVLGlDQUFpQztxSUFBakMsaUNBQWlDLGlEQVJqQztRQUNUO1lBQ0UsT0FBTyxFQUFFLGFBQWE7WUFDdEIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7MkZBRVUsaUNBQWlDO2tCQVg3QyxTQUFTO21CQUFDO29CQUNULCtDQUErQztvQkFDL0MsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixXQUFXLG1DQUFtQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5HX1ZBTElEQVRPUlMsXG4gIFZhbGlkYXRvcixcbiAgQWJzdHJhY3RDb250cm9sLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQaG9uZU51bWJlciwgUGhvbmVOdW1iZXJVdGlsIH0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcblxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMge1xuICBzdGF0aWMgcGhvbmUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIGNvbnN0IGVycm9yID0geyBwaG9uZTogdHJ1ZSB9O1xuICAgIGxldCBwaG9uZU51bWJlcjogUGhvbmVOdW1iZXI7XG5cbiAgICBpZiAodHlwZW9mIGNvbnRyb2wudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwaG9uZU51bWJlciA9IFBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpLnBhcnNlKGNvbnRyb2wudmFsdWUsIG51bGwpO1xuICAgICAgICBpZiAoUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCkuaXNWYWxpZE51bWJlcihwaG9uZU51bWJlcikpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBwaG9uZU51bWJlciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghcGhvbmVOdW1iZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBJZiBmYWlsZWQgdG8gcGFyc2UsIHRyeSBhZGRpbmcgYSArMSBhbmQgc2VlIGlmIHZhbGlkXG4gICAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUubGVuZ3RoID49IDEwICYmIGNvbnRyb2wudmFsdWUuaW5kZXhPZignKycpID09PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgdiA9ICcrMScgKyBjb250cm9sLnZhbHVlO1xuICAgICAgICAgICAgcGhvbmVOdW1iZXIgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5wYXJzZSh2LCBudWxsKTtcbiAgICAgICAgICAgIGlmIChQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKS5pc1ZhbGlkTnVtYmVyKHBob25lTnVtYmVyKSkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsOyAvLyBhbGxvdyBlbXB0eSB0byBiZSB2YWxpZCBhcyB0aGUgcmVxdWlyZWQgdmFsaWRhdG9yIGNhbiBiZSBhZGRlZCBpZiBuZWVkZWRcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnW2lvbkludGxUZWxJbnB1dFZhbGlkXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gICAgICB1c2VFeGlzdGluZzogSW9uSW50bFRlbElucHV0VmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgSW9uSW50bFRlbElucHV0VmFsaWRhdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuICAgIHJldHVybiBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JzLnBob25lKGNvbnRyb2wpO1xuICB9XG59XG4iXX0=