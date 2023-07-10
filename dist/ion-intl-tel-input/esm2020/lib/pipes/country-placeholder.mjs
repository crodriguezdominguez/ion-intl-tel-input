import { Pipe } from '@angular/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import * as i0 from "@angular/core";
export class CountryPlaceholder {
    transform(country, inputPlaceholder, separateDialCode, fallbackPlaceholder, usePatternPlaceholder) {
        if (inputPlaceholder && inputPlaceholder.length > 0) {
            return inputPlaceholder;
        }
        const phoneUtil = PhoneNumberUtil.getInstance();
        try {
            const example = phoneUtil.getExampleNumber(country.isoCode);
            let placeholder = phoneUtil.format(example, PhoneNumberFormat.INTERNATIONAL);
            if (usePatternPlaceholder) {
                const dc = placeholder.substring(0, placeholder.indexOf(' '));
                placeholder = placeholder.substring(placeholder.indexOf(' ') + 1);
                placeholder = dc + ' ' + placeholder.replace(/\d/g, 'x');
            }
            if (placeholder) {
                if (separateDialCode) {
                    return placeholder.substr(placeholder.indexOf(' ') + 1);
                }
                else {
                    return placeholder;
                }
            }
        }
        catch (e) {
            return fallbackPlaceholder;
        }
    }
}
/** @nocollapse */ CountryPlaceholder.ɵfac = function CountryPlaceholder_Factory(t) { return new (t || CountryPlaceholder)(); };
/** @nocollapse */ CountryPlaceholder.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "countryPlaceholder", type: CountryPlaceholder, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountryPlaceholder, [{
        type: Pipe,
        args: [{ name: 'countryPlaceholder' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL3BpcGVzL2NvdW50cnktcGxhY2Vob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUkzRSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FBQyxPQUFpQixFQUFFLGdCQUF3QixFQUMzQyxnQkFBeUIsRUFBRSxtQkFBMkIsRUFDdEQscUJBQThCO1FBQ3RDLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCO1FBRUQsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELElBQUk7WUFFRixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVELElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTdFLElBQUkscUJBQXFCLEVBQUU7Z0JBQ3pCLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDMUQ7WUFDRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLGdCQUFnQixFQUFFO29CQUNwQixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDekQ7cUJBQU07b0JBQ0wsT0FBTyxXQUFXLENBQUM7aUJBQ3BCO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtJQUNILENBQUM7O3VHQTdCVSxrQkFBa0I7NEhBQWxCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBRDlCLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBob25lTnVtYmVyRm9ybWF0LCBQaG9uZU51bWJlclV0aWwgfSBmcm9tICdnb29nbGUtbGlicGhvbmVudW1iZXInO1xuaW1wb3J0IHsgQ291bnRyeUkgfSBmcm9tICcuLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XG5cbkBQaXBlKHsgbmFtZTogJ2NvdW50cnlQbGFjZWhvbGRlcicgfSlcbmV4cG9ydCBjbGFzcyBDb3VudHJ5UGxhY2Vob2xkZXIgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGNvdW50cnk6IENvdW50cnlJLCBpbnB1dFBsYWNlaG9sZGVyOiBzdHJpbmcsXG4gICAgICAgICAgICBzZXBhcmF0ZURpYWxDb2RlOiBib29sZWFuLCBmYWxsYmFja1BsYWNlaG9sZGVyOiBzdHJpbmcsXG4gICAgICAgICAgICB1c2VQYXR0ZXJuUGxhY2Vob2xkZXI6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIGlmIChpbnB1dFBsYWNlaG9sZGVyICYmIGlucHV0UGxhY2Vob2xkZXIubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIGlucHV0UGxhY2Vob2xkZXI7XG4gICAgfVxuXG4gICAgY29uc3QgcGhvbmVVdGlsID0gUGhvbmVOdW1iZXJVdGlsLmdldEluc3RhbmNlKCk7XG4gICAgdHJ5IHtcblxuICAgICAgY29uc3QgZXhhbXBsZSA9IHBob25lVXRpbC5nZXRFeGFtcGxlTnVtYmVyKGNvdW50cnkuaXNvQ29kZSk7XG4gICAgICBsZXQgcGxhY2Vob2xkZXIgPSBwaG9uZVV0aWwuZm9ybWF0KGV4YW1wbGUsIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpO1xuXG4gICAgICBpZiAodXNlUGF0dGVyblBsYWNlaG9sZGVyKSB7XG4gICAgICAgIGNvbnN0IGRjID0gcGxhY2Vob2xkZXIuc3Vic3RyaW5nKDAsIHBsYWNlaG9sZGVyLmluZGV4T2YoJyAnKSk7XG4gICAgICAgIHBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXIuc3Vic3RyaW5nKHBsYWNlaG9sZGVyLmluZGV4T2YoJyAnKSArIDEpO1xuICAgICAgICBwbGFjZWhvbGRlciA9IGRjICsgJyAnICsgcGxhY2Vob2xkZXIucmVwbGFjZSgvXFxkL2csICd4Jyk7XG4gICAgICB9XG4gICAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgaWYgKHNlcGFyYXRlRGlhbENvZGUpIHtcbiAgICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXIuc3Vic3RyKHBsYWNlaG9sZGVyLmluZGV4T2YoJyAnKSArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxsYmFja1BsYWNlaG9sZGVyO1xuICAgIH1cbiAgfVxufVxuIl19