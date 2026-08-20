import {
  Component,
  OnInit,
  forwardRef,
  OnChanges,
  SimpleChanges,
  ElementRef,
  HostBinding,
  input, inject, viewChild,
  output, ChangeDetectionStrategy
} from '@angular/core';

import { addIcons } from 'ionicons';
import {caretDown} from 'ionicons/icons';

import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor, FormsModule,
} from '@angular/forms';

import {
  parsePhoneNumber,
  PhoneNumber
} from 'libphonenumber-js';

import { CountryI } from '../models/country.model';

import { IonIntlTelInputService } from '../ion-intl-tel-input.service';
import { raf } from '../util/util';
import { IonIntTelCodeComponent } from './ion-intl-tel-code.component';
import {IonButton, IonIcon, IonInput, IonText, ModalController, Platform} from '@ionic/angular';

import {CountryPlaceholder} from '../pipes/country-placeholder';

/**
 * @ignore
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ion-intl-tel-input',
  templateUrl: './ion-intl-tel-input.component.html',
  styleUrls: ['./ion-intl-tel-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IonIntlTelInputComponent),
      multi: true,
    },
  ],
  imports: [
    IonInput,
    FormsModule,
    IonText,
    IonButton,
    IonIcon,
    CountryPlaceholder
]
})

/**
 * @author Azzam Asghar <azzam.asghar@interstellus.com>
 * @author Steve Drew <sdrew@waitwell.ca>
 * @author Carlos Rodríguez <carlosrodriguez@ugr.es>
 */
export class IonIntlTelInputComponent implements ControlValueAccessor, OnInit, OnChanges {
  private readonly el = inject(ElementRef);
  private readonly platform = inject(Platform);
  private readonly ionIntlTelInputService = inject(IonIntlTelInputService);
  private readonly modalCtrl = inject(ModalController);

  @HostBinding('class.ion-intl-tel-input') cssClass = true;
  @HostBinding('class.ion-intl-tel-input-ios') isIos: boolean;
  @HostBinding('class.ion-intl-tel-input-md') isMD: boolean;
  @HostBinding('class.has-focus') hasFocus;
  @HostBinding('class.ion-intl-tel-input-has-value')
  get hasValueCssClass(): boolean {
    return this.hasValue();
  }
  @HostBinding('class.ion-intl-tel-input-is-enabled')
  get isEnabled(): boolean {
    return !this.disabled;
  }

  /**
   * autocomplete, set to 'tel' if needed
   *
   * @default 'off'
   * @memberof IonIntlTelInputComponent
   */
  readonly autocomplete = input<'off' | 'tel'>('off');

  /**
   * required, passed onto ion-input so we can be accessiblity compliant
   *
   * @default false
   * @memberof IonIntlTelInputComponent
   */
  readonly required = input(false);

  /**
   * Iso Code of default selected Country.
   * See more on.
   *
   * @default ''
   * @memberof IonIntlTelInputComponent
   */
  readonly defaultCountryiso = input('');

  /**
   * Determines whether to use `00` or `+` as dial code prefix.
   * Available attributes are '+' | '00'.
   * See more on.
   *
   * @default +
   * @memberof IonIntlTelInputComponent
   */
  readonly dialCodePrefix = input<'+' | '00'>('+');

  /**
   * Determines whether to select automatic country based on user input.
   * See more on.
   *
   * @default true
   * @memberof IonIntlTelInputComponent
   */
  readonly enableAutoCountrySelect = input(true);

  /**
   * Determines whether an example number will be shown as a placeholder in input.
   * See more on.
   *
   * @default true
   * @memberof IonIntlTelInputComponent
   */
  readonly enablePlaceholder = input(true);

  /**
   * A fallaback placeholder to be used if no example number is found for a country.
   * See more on.
   *
   * @default ''
   * @memberof IonIntlTelInputComponent
   */
  readonly fallbackPlaceholder = input('');

  /**
   * If a custom placeholder is needed for input.
   * If this property is set it will override `enablePlaceholder` and only this placeholder will be shown.
   * See more on.
   *
   * @default ''
   * @memberof IonIntlTelInputComponent
   */
  readonly inputPlaceholder = input('');

  readonly inputLabel = input('');

  readonly inputLabelColor = input(undefined);

  readonly inputLabelPlacement = input<'start' | 'end' | 'floating' | 'stacked' | 'fixed'>('start');

  /**
   * Instead of an example phone number, use a x pattern. Such as xxx-xxx-xxxx, this will be obtained
   * based on the example number from the google phone lib.
   *
   * @default true
   * @memberof IonIntlTelInputComponent
   */
  readonly usePatternPlaceholder = input(true);

  /**
   * Maximum Length for input.
   * See more on.
   *
   * @default '15'
   * @memberof IonIntlTelInputComponent
   */
  readonly maxLength = input('15');

  /**
   * Title of modal opened to select country dial code.
   * See more on.
   *
   * @default 'Select Country'
   * @memberof IonIntlTelInputComponent
   */
  readonly modalTitle = input('Select Country');

  /**
   * CSS class to attach to dial code selectionmodal.
   * See more on.
   *
   * @default 'ion-intl-tel-modal'
   * @memberof IonIntlTelInputComponent
   */
  readonly modalCssClass = input('ion-intl-tel-modal');

  /**
   * Placeholder for input in dial code selection modal.
   * See more on.
   *
   * @default 'Enter country name'
   * @memberof IonIntlTelInputComponent
   */
  readonly modalSearchPlaceholder = input('Enter country name');

  /**
   * Text for close button in dial code selection modal.
   * See more on.
   *
   * @default 'Close'
   * @memberof IonIntlTelInputComponent
   */
  readonly modalCloseText = input('Close');

  /**
   * Slot for close button in dial code selection modal. [Ionic slots](https://ionicframework.com/docs/api/item) are supported
   * See more on.
   *
   * @default 'end'
   * @memberof IonIntlTelInputComponent
   */
  readonly modalCloseButtonSlot = input<'start' | 'end' | 'primary' | 'secondary'>('end');

  /**
   * Determines whether dial code selection modal should be searchable or not.
   * See more on.
   *
   * @default 'true'
   * @memberof IonIntlTelInputComponent
   */
  readonly modalCanSearch = input(true);

  /**
   * Determines whether dial code selection modal is closed on backdrop click.
   * See more on.
   *
   * @default 'true'
   * @memberof IonIntlTelInputComponent
   */
  readonly modalShouldBackdropClose = input(true);

  /**
   * Determines whether input should be focused when dial code selection modal is opened.
   * See more on.
   *
   * @default 'true'
   * @memberof IonIntlTelInputComponent
   */
  readonly modalShouldFocusSearchbar = input(true);

  /**
   * Message to show when no countries are found for search in dial code selection modal.
   * See more on.
   *
   * @default 'true'
   * @memberof IonIntlTelInputComponent
   */
  readonly modalSearchFailText = input('No countries found');

  /**
   * List of iso codes of manually selected countries as string, which will appear in the dropdown.
   * **Note**: `onlyCountries` should be a string array of country iso codes.
   * See more on.
   *
   * @default null
   * @memberof IonIntlTelInputComponent
   */
  readonly onlyCountries = input<Array<string>>([]);

  /**
   * List of iso codesn as string of  countries, which will appear at the top in dial code selection modal.
   * **Note**: `preferredCountries` should be a string array of country iso codes.
   * See more on.
   *
   * @default null
   * @memberof IonIntlTelInputComponent
   */
  readonly preferredCountries = input<Array<string>>([]);

  /**
   * Determines whether first country should be selected in dial code select or not.
   * See more on.
   *
   * @default true
   * @memberof IonIntlTelInputComponent
   */
  readonly selectFirstCountry = input(true);

  /**
   * Determines whether to visually separate dialcode into the drop down element.
   * See more on.
   *
   * @default true
   * @memberof IonIntlTelInputComponent
   */
  readonly separateDialCode = input(true);

  /**
   * Fires when the Phone number Input is changed.
   * See more on.
   *
   * @memberof IonIntlTelInputComponent
   */
  readonly numberChange = output<Event>();

  /**
   * Fires when the Phone number Input is blurred.
   * See more on.
   *
   * @memberof IonIntlTelInputComponent
   */
  readonly numberBlur = output<void>();

  /**
   * Fires when the Phone number Input is focused.
   * See more on.
   *
   * @memberof IonIntlTelInputComponent
   */
  readonly numberFocus = output<void>();

  /**
   * Fires when the user is typing in Phone number Input.
   * See more on.
   *
   * @memberof IonIntlTelInputComponent
   */
  readonly numberInput = output<KeyboardEvent>();

  /**
   * Fires when the dial code selection is changed.
   * See more on.
   *
   * @memberof IonIntlTelInputComponent
   */
  readonly codeChange = output<CountryI>();

  /**
   * Fires when the dial code selection modal is opened.
   * See more on.
   *
   * @memberof IonIntlTelInputComponent
   */
  readonly codeOpen = output<any>();

  /**
   * Fires when the dial code selection modal is closed.
   * See more on.
   *
   * @memberof IonIntlTelInputComponent
   */
  readonly codeClose = output<any>();

  /**
   * Fires when a dial code is selected in dial code selection modal.
   * See more on.
   *
   * @memberof IonIntlTelInputComponent
   */
  readonly codeSelect = output<string>();

  private readonly numberInputEl = viewChild<IonInput>('numberInput');

  // tslint:disable-next-line: variable-name
  private _value: string = null;

  country: CountryI;
  phoneNumber = '';
  countries: CountryI[] = [];
  disabled = false;

  onTouched: () => void = () => { };
  propagateChange = (_: string | null) => { };

  constructor() {
    addIcons({caretDown});
  }

  get value(): string | null {
    return this._value;
  }

  set value(value: string | null) {
    this._value = value;
    this.setIonicClasses(this.el);
  }

  emitValueChange(change: string | null) {
    this.propagateChange(change);
  }

  ngOnInit() {
    this.isIos = this.platform.is('ios');
    this.isMD = !this.isIos;
    this.setItemClass(this.el, 'item-interactive', true);

    this.fetchAllCountries();
    this.setPreferredCountries();

    if (this.onlyCountries().length) {
      this.countries = this.countries.filter((country: CountryI) =>
          this.onlyCountries().includes(country.isoCode)
      );
    }

    if (this.selectFirstCountry()) {
      const defaultCountryiso = this.defaultCountryiso();
      if (defaultCountryiso) {
        this.setCountry(this.getCountryByIsoCode(defaultCountryiso));
      } else {
        const preferredCountries = this.preferredCountries();
        if (
            preferredCountries.length &&
            preferredCountries.includes(defaultCountryiso)
        ) {
          this.setCountry(this.getCountryByIsoCode(preferredCountries[0]));
        } else {
          this.setCountry(this.countries[0]);
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
        this.countries &&
        changes.defaulyCountryisoCode &&
        changes.defaulyCountryisoCode.currentValue !==
        changes.defaulyCountryisoCode.previousValue
    ) {
      this.setCountry(changes.defaulyCountryisoCode.currentValue);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: string): void {
    this.fillValues(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  fillValues(value: string) {
    if (value && typeof value === 'string') {
      let googleNumber: PhoneNumber;
      try {
        googleNumber = parsePhoneNumber(value);
      } catch (e) {
      }
      if (!googleNumber) {
        // If failed to parse, try adding a +1 and see if valid
        if (value.length >= 10 && value.indexOf('+') === -1) {
          const v = '+1' + value;
          googleNumber = parsePhoneNumber(v);
        }
      }
      if (!googleNumber) {
        console.log('Warning: failed to parse number: ', value);
      }
      if (googleNumber) {
        let isoCode = googleNumber && googleNumber.country
            ? googleNumber.country
            : this.country.isoCode;
        if (isoCode && isoCode !== this.country.isoCode) {
          const newCountry = this.countries.find(
              (country: CountryI) => country.isoCode === isoCode
          );
          if (newCountry) {
            this.country = newCountry;
          }
        }
        isoCode = isoCode ? isoCode : this.country ? this.country.isoCode : null;

        const internationallNo = googleNumber.formatInternational();
        this.phoneNumber = this.removeDialCode(internationallNo);
        this.value = internationallNo;
      }
      return;
    }
  }

  hasValue(): boolean {
    return !this.isNullOrWhiteSpace(this.value);
  }

  async openModal() {

    const modal = await this.modalCtrl.create({
      component: IonIntTelCodeComponent,
      cssClass: this.modalCssClass(),
      backdropDismiss: this.modalShouldBackdropClose(),
      componentProps: {
        country: this.country,
        canSearch: this.modalCanSearch(),
        closeButtonText: this.modalCloseText(),
        closeButtonSlot: this.modalCloseButtonSlot(),
        countries: this.countries,
        title: this.modalTitle(),
        searchFailText: this.modalSearchFailText(),
        searchPlaceholder: this.modalSearchPlaceholder(),
        shouldFocusSearchbar: this.modalShouldFocusSearchbar(),
        dialCode: this.separateDialCode() ? this.dialCodePrefix() : null
      }
    });
    await modal.present();
    modal.onDidDismiss().then(data => {
      if (data.data) {
        this.country = data.data;
        this.onCodeChange();
      }
    });

  }

  onCodeChange(): void {
    if (this.isNullOrWhiteSpace(this.phoneNumber)) {
      this.emitValueChange(null);
    } else {
      let googleNumber: PhoneNumber;
      try {
        googleNumber = parsePhoneNumber(this.phoneNumber, this.country.isoCode.toUpperCase() as any);
      } catch (e) { }

      const internationallNo = googleNumber
          ? googleNumber.formatInternational()
          : '';

      if (this.separateDialCode() && internationallNo) {
        this.phoneNumber = this.removeDialCode(internationallNo);
      }
      this.emitValueChange(internationallNo);

      // TODO: The 'emit' function requires a mandatory any argument
      this.codeChange.emit(undefined);
    }
    setTimeout(() => {
      this.numberInputEl().setFocus().then();
    }, 400);
  }

  onIonNumberChange(event: Event) {
    this.setIonicClasses(this.el);
    this.numberChange.emit(event);
  }

  onIonNumberBlur() {
    this.onTouched();
    this.setIonicClasses(this.el);
    this.hasFocus = false;
    this.setItemClass(this.el, 'item-has-focus', false);
    // TODO: The 'emit' function requires a mandatory void argument
    this.numberBlur.emit();
  }

  onIonNumberFocus() {
    this.hasFocus = true;
    this.setItemClass(this.el, 'item-has-focus', true);
    // TODO: The 'emit' function requires a mandatory void argument
    this.numberFocus.emit();
  }

  onIonNumberInput(event: KeyboardEvent) {
    this.numberInput.emit(event);
  }

  // called via (ngModelChange)
  onNumberChange(): void {
    if (!this.phoneNumber) {
      this.value = null;
      this.emitValueChange(null);
      return;
    }
    if (this.country) {
      this.emitValueChange(this.dialCodePrefix() + this.country.dialCode + ' ' + this.phoneNumber);
    }
    let googleNumber: PhoneNumber;
    try {
      googleNumber = parsePhoneNumber(this.phoneNumber, this.country.isoCode.toUpperCase() as any);
    } catch (e) {
      return;
    }

    let isoCode = this.country ? this.country.isoCode : null;
    // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
    if (this.enableAutoCountrySelect()) {
      isoCode =
          googleNumber && googleNumber.country
              ? googleNumber.country
              : this.country.isoCode;
      if (isoCode && isoCode !== this.country.isoCode) {
        const newCountry = this.countries.find(
            (country: CountryI) => country.isoCode === isoCode
        );
        if (newCountry) {
          this.country = newCountry;
        }
      }
    }
    isoCode = isoCode ? isoCode : this.country ? this.country.isoCode : null;

    if (!this.phoneNumber || !isoCode) {
      this.emitValueChange(null);
    } else {
      const internationallNo = googleNumber
          ? googleNumber.formatInternational()
          : '';
      const nationalNo = googleNumber
          ? googleNumber.formatNational()
          : '';

      if (this.separateDialCode() && internationallNo) {
        this.phoneNumber = this.removeDialCode(internationallNo);
      }

      this.emitValueChange(internationallNo);
    }
  }

  onNumberKeyDown(event: KeyboardEvent) {
    const allowedChars = /^[0-9\+\-\ ]/;
    const allowedCtrlChars = /[axcv]/;
    const allowedOtherKeys = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
      'Home',
      'End',
      'Insert',
      'Delete',
      'Backspace',
      'Tab',
    ];
    const isCtrlKey = event.ctrlKey || event.metaKey;

    if (
        !allowedChars.test(event.key) &&
        !(isCtrlKey && allowedCtrlChars.test(event.key)) &&
        !allowedOtherKeys.includes(event.key)
    ) {
      event.preventDefault();
    }
  }

  private fetchAllCountries() {
    this.countries = this.ionIntlTelInputService.getListOfCountries();
  }

  private getCountryByIsoCode(isoCode: string): CountryI {
    for (const country of this.countries) {
      if (country.isoCode === isoCode) {
        return country;
      }
    }
    console.error('tel: unknown country iso code: ', isoCode);
    return;
  }

  private isNullOrWhiteSpace(value: any): boolean {
    if (value === null || value === undefined) {
      return true;
    }
    if (typeof value === 'string' && value === '') {
      return true;
    }
    return typeof value === 'object' && Object.keys(value).length === 0;
  }

  private removeDialCode(phoneNumber: string): string {
    if (this.separateDialCode() && phoneNumber) {
      phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
    }
    return phoneNumber;
  }

  private setCountry(country: CountryI): void {
    this.country = country;
    this.codeChange.emit(this.country);
  }

  private setPreferredCountries(): void {
    for (const preferedCountryIsoCode of this.preferredCountries()) {
      const country = this.getCountryByIsoCode(preferedCountryIsoCode);
      country.priority = country ? 1 : country.priority;
    }
    this.countries.sort((a, b) =>
        a.priority > b.priority ? -1 : a.priority < b.priority ? 1 : 0
    );
  }

  private readonly getClasses = (element: HTMLElement) => {
    const classList = element.classList;
    const classes = [];
    for (let i = 0; i < classList.length; i++) {
      const item = classList.item(i);
      if (item !== null && item.startsWith('ng-')) {
        classes.push(`ion-${item.substring(3)}`);
      }
    }
    return classes;
  }

  private readonly setClasses = (element: HTMLElement, classes: string[]) => {
    const classList = element.classList;
    [
      'ion-valid',
      'ion-invalid',
      'ion-touched',
      'ion-untouched',
      'ion-dirty',
      'ion-pristine',
    ].forEach((c) => classList.remove(c));

    classes.forEach((c) => classList.add(c));
  }

  private readonly setIonicClasses = (element: ElementRef) => {
    raf(() => {
      const htmlElement = element.nativeElement as HTMLElement;
      const classes = this.getClasses(htmlElement);
      this.setClasses(htmlElement, classes);

      const item = htmlElement.closest('ion-item');
      if (item) {
        this.setClasses(item, classes);
      }
    });
  }

  private readonly setItemClass = (
      element: ElementRef,
      className: string,
      addClass: boolean
  ) => {
    const htmlElement = element.nativeElement as HTMLElement;
    const item = htmlElement.closest('ion-item');
    if (item) {
      const classList = item.classList;
      if (addClass) {
        classList.add(className);
      } else {
        classList.remove(className);
      }
    }
  }
}
