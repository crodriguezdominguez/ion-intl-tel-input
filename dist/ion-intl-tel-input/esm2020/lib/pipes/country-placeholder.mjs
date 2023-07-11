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
/** @nocollapse */ CountryPlaceholder.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CountryPlaceholder, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
/** @nocollapse */ CountryPlaceholder.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: CountryPlaceholder, name: "countryPlaceholder" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CountryPlaceholder, decorators: [{
            type: Pipe,
            args: [{ name: 'countryPlaceholder' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1wbGFjZWhvbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL3BpcGVzL2NvdW50cnktcGxhY2Vob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUkzRSxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FBQyxPQUFpQixFQUFFLGdCQUF3QixFQUMzQyxnQkFBeUIsRUFBRSxtQkFBMkIsRUFDdEQscUJBQThCO1FBQ3RDLElBQUksZ0JBQWdCLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRCxPQUFPLGdCQUFnQixDQUFDO1NBQ3pCO1FBRUQsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hELElBQUk7WUFFRixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVELElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRTdFLElBQUkscUJBQXFCLEVBQUU7Z0JBQ3pCLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDOUQsV0FBVyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsV0FBVyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDMUQ7WUFDRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLGdCQUFnQixFQUFFO29CQUNwQixPQUFPLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDekQ7cUJBQU07b0JBQ0wsT0FBTyxXQUFXLENBQUM7aUJBQ3BCO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtJQUNILENBQUM7O2tJQTdCVSxrQkFBa0I7Z0lBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUQ5QixJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGhvbmVOdW1iZXJGb3JtYXQsIFBob25lTnVtYmVyVXRpbCB9IGZyb20gJ2dvb2dsZS1saWJwaG9uZW51bWJlcic7XG5pbXBvcnQgeyBDb3VudHJ5SSB9IGZyb20gJy4uL21vZGVscy9jb3VudHJ5Lm1vZGVsJztcblxuQFBpcGUoeyBuYW1lOiAnY291bnRyeVBsYWNlaG9sZGVyJyB9KVxuZXhwb3J0IGNsYXNzIENvdW50cnlQbGFjZWhvbGRlciBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oY291bnRyeTogQ291bnRyeUksIGlucHV0UGxhY2Vob2xkZXI6IHN0cmluZyxcbiAgICAgICAgICAgIHNlcGFyYXRlRGlhbENvZGU6IGJvb2xlYW4sIGZhbGxiYWNrUGxhY2Vob2xkZXI6IHN0cmluZyxcbiAgICAgICAgICAgIHVzZVBhdHRlcm5QbGFjZWhvbGRlcjogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgaWYgKGlucHV0UGxhY2Vob2xkZXIgJiYgaW5wdXRQbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gaW5wdXRQbGFjZWhvbGRlcjtcbiAgICB9XG5cbiAgICBjb25zdCBwaG9uZVV0aWwgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcbiAgICB0cnkge1xuXG4gICAgICBjb25zdCBleGFtcGxlID0gcGhvbmVVdGlsLmdldEV4YW1wbGVOdW1iZXIoY291bnRyeS5pc29Db2RlKTtcbiAgICAgIGxldCBwbGFjZWhvbGRlciA9IHBob25lVXRpbC5mb3JtYXQoZXhhbXBsZSwgUGhvbmVOdW1iZXJGb3JtYXQuSU5URVJOQVRJT05BTCk7XG5cbiAgICAgIGlmICh1c2VQYXR0ZXJuUGxhY2Vob2xkZXIpIHtcbiAgICAgICAgY29uc3QgZGMgPSBwbGFjZWhvbGRlci5zdWJzdHJpbmcoMCwgcGxhY2Vob2xkZXIuaW5kZXhPZignICcpKTtcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlci5zdWJzdHJpbmcocGxhY2Vob2xkZXIuaW5kZXhPZignICcpICsgMSk7XG4gICAgICAgIHBsYWNlaG9sZGVyID0gZGMgKyAnICcgKyBwbGFjZWhvbGRlci5yZXBsYWNlKC9cXGQvZywgJ3gnKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgICBpZiAoc2VwYXJhdGVEaWFsQ29kZSkge1xuICAgICAgICAgIHJldHVybiBwbGFjZWhvbGRlci5zdWJzdHIocGxhY2Vob2xkZXIuaW5kZXhPZignICcpICsgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbGxiYWNrUGxhY2Vob2xkZXI7XG4gICAgfVxuICB9XG59XG4iXX0=