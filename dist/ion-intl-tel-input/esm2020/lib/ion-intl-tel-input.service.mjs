import { Injectable } from '@angular/core';
import { countries } from './data/countries';
import * as i0 from "@angular/core";
export class IonIntlTelInputService {
    constructor() {
        this.countryList = countries;
    }
    getListOfCountries() {
        return this.countryList;
    }
}
/** @nocollapse */ IonIntlTelInputService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ IonIntlTelInputService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb24taW50bC10ZWwtaW5wdXQvc3JjL2xpYi9pb24taW50bC10ZWwtaW5wdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLHNCQUFzQjtJQUlqQztRQUZBLGdCQUFXLEdBQWUsU0FBUyxDQUFDO0lBRXBCLENBQUM7SUFFakIsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDOztzSUFSVSxzQkFBc0I7MElBQXRCLHNCQUFzQixjQUZyQixNQUFNOzJGQUVQLHNCQUFzQjtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvdW50cnlJIH0gZnJvbSAnLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XG5pbXBvcnQgeyBjb3VudHJpZXMgfSBmcm9tICcuL2RhdGEvY291bnRyaWVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW9uSW50bFRlbElucHV0U2VydmljZSB7XG5cbiAgY291bnRyeUxpc3Q6IENvdW50cnlJW10gPSBjb3VudHJpZXM7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXRMaXN0T2ZDb3VudHJpZXMoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb3VudHJ5TGlzdDtcbiAgfVxufVxuIl19