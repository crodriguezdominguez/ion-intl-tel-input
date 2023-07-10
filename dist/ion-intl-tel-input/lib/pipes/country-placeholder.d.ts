import { PipeTransform } from '@angular/core';
import { CountryI } from '../models/country.model';
import * as i0 from "@angular/core";
export declare class CountryPlaceholder implements PipeTransform {
    transform(country: CountryI, inputPlaceholder: string, separateDialCode: boolean, fallbackPlaceholder: string, usePatternPlaceholder: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryPlaceholder, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CountryPlaceholder, "countryPlaceholder", false>;
}
