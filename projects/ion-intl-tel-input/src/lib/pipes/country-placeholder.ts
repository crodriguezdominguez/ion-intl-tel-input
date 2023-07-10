import { Pipe, PipeTransform } from '@angular/core';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { CountryI } from '../models/country.model';

@Pipe({ name: 'countryPlaceholder' })
export class CountryPlaceholder implements PipeTransform {
  transform(country: CountryI, inputPlaceholder: string,
            separateDialCode: boolean, fallbackPlaceholder: string,
            usePatternPlaceholder: boolean): string {
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
        } else {
          return placeholder;
        }
      }
    } catch (e) {
      return fallbackPlaceholder;
    }
  }
}
