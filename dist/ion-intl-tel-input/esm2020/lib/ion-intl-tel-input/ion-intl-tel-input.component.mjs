import { Component, Input, forwardRef, Output, EventEmitter, ViewChild, ElementRef, HostBinding, } from '@angular/core';
import { NG_VALUE_ACCESSOR, } from '@angular/forms';
import { IonInput, ModalController, Platform } from '@ionic/angular';
import { PhoneNumberFormat, PhoneNumberUtil, } from 'google-libphonenumber';
import { IonIntlTelInputService } from '../ion-intl-tel-input.service';
import { raf } from '../util/util';
import { IonIntTelCodeComponent } from './ion-intl-tel-code.component';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "../ion-intl-tel-input.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "../pipes/country-placeholder";
/**
 * @ignore
 */
/**
 * @author Azzam Asghar <azzam.asghar@interstellus.com>
 * @author Steve Drew <sdrew@waitwell.ca>
 */
export class IonIntlTelInputComponent {
    get hasValueCssClass() {
        return this.hasValue();
    }
    get isEnabled() {
        return !this.disabled;
    }
    constructor(el, platform, ionIntlTelInputService, modalCtrl) {
        this.el = el;
        this.platform = platform;
        this.ionIntlTelInputService = ionIntlTelInputService;
        this.modalCtrl = modalCtrl;
        this.cssClass = true;
        /**
         * autocomplete, set to 'tel' if needed
         *
         * @default 'off'
         * @memberof IonIntlTelInputComponent
         */
        this.autocomplete = 'off';
        /**
         * required, passed onto ion-input so we can be accessiblity compliant
         *
         * @default false
         * @memberof IonIntlTelInputComponent
         */
        this.required = false;
        /**
         * Iso Code of default selected Country.
         * See more on.
         *
         * @default ''
         * @memberof IonIntlTelInputComponent
         */
        this.defaultCountryiso = '';
        /**
         * Determines whether to use `00` or `+` as dial code prefix.
         * Available attributes are '+' | '00'.
         * See more on.
         *
         * @default +
         * @memberof IonIntlTelInputComponent
         */
        this.dialCodePrefix = '+';
        /**
         * Determines whether to select automatic country based on user input.
         * See more on.
         *
         * @default true
         * @memberof IonIntlTelInputComponent
         */
        this.enableAutoCountrySelect = true;
        /**
         * Determines whether an example number will be shown as a placeholder in input.
         * See more on.
         *
         * @default true
         * @memberof IonIntlTelInputComponent
         */
        this.enablePlaceholder = true;
        /**
         * A fallaback placeholder to be used if no example number is found for a country.
         * See more on.
         *
         * @default ''
         * @memberof IonIntlTelInputComponent
         */
        this.fallbackPlaceholder = '';
        /**
         * If a custom placeholder is needed for input.
         * If this property is set it will override `enablePlaceholder` and only this placeholder will be shown.
         * See more on.
         *
         * @default ''
         * @memberof IonIntlTelInputComponent
         */
        this.inputPlaceholder = '';
        /**
         * Instead of an example phone number, use a x pattern. Such as xxx-xxx-xxxx, this will be obtained
         * based on the example number from the google phone lib.
         *
         * @default true
         * @memberof IonIntlTelInputComponent
         */
        this.usePatternPlaceholder = true;
        /**
         * Maximum Length for input.
         * See more on.
         *
         * @default '15'
         * @memberof IonIntlTelInputComponent
         */
        this.maxLength = '15';
        /**
         * Title of modal opened to select country dial code.
         * See more on.
         *
         * @default 'Select Country'
         * @memberof IonIntlTelInputComponent
         */
        this.modalTitle = 'Select Country';
        /**
         * CSS class to attach to dial code selectionmodal.
         * See more on.
         *
         * @default 'ion-intl-tel-modal'
         * @memberof IonIntlTelInputComponent
         */
        this.modalCssClass = 'ion-intl-tel-modal';
        /**
         * Placeholder for input in dial code selection modal.
         * See more on.
         *
         * @default 'Enter country name'
         * @memberof IonIntlTelInputComponent
         */
        this.modalSearchPlaceholder = 'Enter country name';
        /**
         * Text for close button in dial code selection modal.
         * See more on.
         *
         * @default 'Close'
         * @memberof IonIntlTelInputComponent
         */
        this.modalCloseText = 'Close';
        /**
         * Slot for close button in dial code selection modal. [Ionic slots](https://ionicframework.com/docs/api/item) are supported
         * See more on.
         *
         * @default 'end'
         * @memberof IonIntlTelInputComponent
         */
        this.modalCloseButtonSlot = 'end';
        /**
         * Determines whether dial code selection modal should be searchable or not.
         * See more on.
         *
         * @default 'true'
         * @memberof IonIntlTelInputComponent
         */
        this.modalCanSearch = true;
        /**
         * Determines whether dial code selection modal is closed on backdrop click.
         * See more on.
         *
         * @default 'true'
         * @memberof IonIntlTelInputComponent
         */
        this.modalShouldBackdropClose = true;
        /**
         * Determines whether input should be focused when dial code selection modal is opened.
         * See more on.
         *
         * @default 'true'
         * @memberof IonIntlTelInputComponent
         */
        this.modalShouldFocusSearchbar = true;
        /**
         * Message to show when no countries are found for search in dial code selection modal.
         * See more on.
         *
         * @default 'true'
         * @memberof IonIntlTelInputComponent
         */
        this.modalSearchFailText = 'No countries found';
        /**
         * List of iso codes of manually selected countries as string, which will appear in the dropdown.
         * **Note**: `onlyCountries` should be a string array of country iso codes.
         * See more on.
         *
         * @default null
         * @memberof IonIntlTelInputComponent
         */
        this.onlyCountries = [];
        /**
         * List of iso codesn as string of  countries, which will appear at the top in dial code selection modal.
         * **Note**: `preferredCountries` should be a string array of country iso codes.
         * See more on.
         *
         * @default null
         * @memberof IonIntlTelInputComponent
         */
        this.preferredCountries = [];
        /**
         * Determines whether first country should be selected in dial code select or not.
         * See more on.
         *
         * @default true
         * @memberof IonIntlTelInputComponent
         */
        this.selectFirstCountry = true;
        /**
         * Determines whether to visually separate dialcode into the drop down element.
         * See more on.
         *
         * @default true
         * @memberof IonIntlTelInputComponent
         */
        this.separateDialCode = true;
        /**
         * Fires when the Phone number Input is changed.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.numberChange = new EventEmitter();
        /**
         * Fires when the Phone number Input is blurred.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.numberBlur = new EventEmitter();
        /**
         * Fires when the Phone number Input is focused.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.numberFocus = new EventEmitter();
        /**
         * Fires when the user is typing in Phone number Input.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.numberInput = new EventEmitter();
        /**
         * Fires when the dial code selection is changed.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.codeChange = new EventEmitter();
        /**
         * Fires when the dial code selection modal is opened.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.codeOpen = new EventEmitter();
        /**
         * Fires when the dial code selection modal is closed.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.codeClose = new EventEmitter();
        /**
         * Fires when a dial code is selected in dial code selection modal.
         * See more on.
         *
         * @memberof IonIntlTelInputComponent
         */
        this.codeSelect = new EventEmitter();
        // tslint:disable-next-line: variable-name
        this._value = null;
        this.phoneNumber = '';
        this.countries = [];
        this.disabled = false;
        this.phoneUtil = PhoneNumberUtil.getInstance();
        this.onTouched = () => { };
        this.propagateChange = (_) => { };
        this.startsWith = (input, search) => {
            return input.substr(0, search.length) === search;
        };
        this.getClasses = (element) => {
            const classList = element.classList;
            const classes = [];
            for (let i = 0; i < classList.length; i++) {
                const item = classList.item(i);
                if (item !== null && this.startsWith(item, 'ng-')) {
                    classes.push(`ion-${item.substr(3)}`);
                }
            }
            return classes;
        };
        this.setClasses = (element, classes) => {
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
        };
        this.setIonicClasses = (element) => {
            raf(() => {
                const input = element.nativeElement;
                const classes = this.getClasses(input);
                this.setClasses(input, classes);
                const item = input.closest('ion-item');
                if (item) {
                    this.setClasses(item, classes);
                }
            });
        };
        this.setItemClass = (element, className, addClass) => {
            const input = element.nativeElement;
            const item = input.closest('ion-item');
            if (item) {
                const classList = item.classList;
                if (addClass) {
                    classList.add(className);
                }
                else {
                    classList.remove(className);
                }
            }
        };
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.setIonicClasses(this.el);
    }
    emitValueChange(change) {
        this.propagateChange(change);
    }
    ngOnInit() {
        this.isIos = this.platform.is('ios');
        this.isMD = !this.isIos;
        this.setItemClass(this.el, 'item-interactive', true);
        this.fetchAllCountries();
        this.setPreferredCountries();
        if (this.onlyCountries.length) {
            this.countries = this.countries.filter((country) => this.onlyCountries.includes(country.isoCode));
        }
        if (this.selectFirstCountry) {
            if (this.defaultCountryiso) {
                this.setCountry(this.getCountryByIsoCode(this.defaultCountryiso));
            }
            else {
                if (this.preferredCountries.length &&
                    this.preferredCountries.includes(this.defaultCountryiso)) {
                    this.setCountry(this.getCountryByIsoCode(this.preferredCountries[0]));
                }
                else {
                    this.setCountry(this.countries[0]);
                }
            }
        }
    }
    ngOnChanges(changes) {
        if (this.countries &&
            changes.defaulyCountryisoCode &&
            changes.defaulyCountryisoCode.currentValue !==
                changes.defaulyCountryisoCode.previousValue) {
            this.setCountry(changes.defaulyCountryisoCode.currentValue);
        }
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(obj) {
        this.fillValues(obj);
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    fillValues(value) {
        if (value && typeof value === 'string') {
            let googleNumber;
            try {
                googleNumber = this.phoneUtil.parse(value, null);
            }
            catch (e) {
            }
            if (!googleNumber) {
                // If failed to parse, try adding a +1 and see if valid
                if (value.length >= 10 && value.indexOf('+') === -1) {
                    const v = '+1' + value;
                    googleNumber = this.phoneUtil.parse(v, null);
                }
            }
            if (!googleNumber) {
                console.log('Warning: failed to parse number: ', value);
            }
            if (googleNumber) {
                let isoCode = googleNumber && googleNumber.getCountryCode()
                    ? this.getCountryIsoCode(googleNumber.getCountryCode(), googleNumber)
                    : this.country.isoCode;
                if (isoCode && isoCode !== this.country.isoCode) {
                    const newCountry = this.countries.find((country) => country.isoCode === isoCode);
                    if (newCountry) {
                        this.country = newCountry;
                    }
                }
                isoCode = isoCode ? isoCode : this.country ? this.country.isoCode : null;
                const internationallNo = this.phoneUtil.format(googleNumber, PhoneNumberFormat.INTERNATIONAL);
                this.phoneNumber = this.removeDialCode(internationallNo);
                this.value = internationallNo;
            }
            return;
        }
    }
    hasValue() {
        return !this.isNullOrWhiteSpace(this.value);
    }
    onCodeOpen() {
        this.codeOpen.emit();
    }
    async openModal() {
        const modal = await this.modalCtrl.create({
            component: IonIntTelCodeComponent,
            cssClass: this.modalCssClass,
            backdropDismiss: this.modalShouldBackdropClose,
            componentProps: {
                country: this.country,
                canSearch: this.modalCanSearch,
                closeButtonText: this.modalCloseText,
                closeButtonSlot: this.modalCloseButtonSlot,
                countries: this.countries,
                title: this.modalTitle,
                searchFailText: this.modalSearchFailText,
                searchPlaceholder: this.modalSearchPlaceholder,
                shouldFocusSearchbar: this.modalShouldFocusSearchbar,
                dialCode: this.separateDialCode ? this.dialCodePrefix : null
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
    onCodeChange() {
        if (this.isNullOrWhiteSpace(this.phoneNumber)) {
            this.emitValueChange(null);
        }
        else {
            let googleNumber;
            try {
                googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
            }
            catch (e) { }
            const internationallNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.INTERNATIONAL)
                : '';
            const nationalNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.NATIONAL)
                : '';
            if (this.separateDialCode && internationallNo) {
                this.phoneNumber = this.removeDialCode(internationallNo);
            }
            this.emitValueChange(internationallNo);
            this.codeChange.emit();
        }
        setTimeout(() => {
            this.numberInputEl.setFocus();
        }, 400);
    }
    onCodeClose() {
        this.onTouched();
        this.setIonicClasses(this.el);
        this.hasFocus = false;
        this.setItemClass(this.el, 'item-has-focus', false);
        this.codeClose.emit();
    }
    onCodeSelect() {
        this.codeSelect.emit();
    }
    onIonNumberChange(event) {
        this.setIonicClasses(this.el);
        this.numberChange.emit(event);
    }
    onIonNumberBlur() {
        this.onTouched();
        this.setIonicClasses(this.el);
        this.hasFocus = false;
        this.setItemClass(this.el, 'item-has-focus', false);
        this.numberBlur.emit();
    }
    onIonNumberFocus() {
        this.hasFocus = true;
        this.setItemClass(this.el, 'item-has-focus', true);
        this.numberFocus.emit();
    }
    onIonNumberInput(event) {
        this.numberInput.emit(event);
    }
    // called via (ngModelChange)
    onNumberChange() {
        if (!this.phoneNumber) {
            this.value = null;
            this.emitValueChange(null);
            return;
        }
        if (this.country) {
            this.emitValueChange(this.dialCodePrefix + this.country.dialCode + ' ' + this.phoneNumber);
        }
        let googleNumber;
        try {
            googleNumber = this.phoneUtil.parse(this.phoneNumber, this.country.isoCode.toUpperCase());
        }
        catch (e) {
            return;
        }
        let isoCode = this.country ? this.country.isoCode : null;
        // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
        if (this.enableAutoCountrySelect) {
            isoCode =
                googleNumber && googleNumber.getCountryCode()
                    ? this.getCountryIsoCode(googleNumber.getCountryCode(), googleNumber)
                    : this.country.isoCode;
            if (isoCode && isoCode !== this.country.isoCode) {
                const newCountry = this.countries.find((country) => country.isoCode === isoCode);
                if (newCountry) {
                    this.country = newCountry;
                }
            }
        }
        isoCode = isoCode ? isoCode : this.country ? this.country.isoCode : null;
        if (!this.phoneNumber || !isoCode) {
            this.emitValueChange(null);
        }
        else {
            const internationallNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.INTERNATIONAL)
                : '';
            const nationalNo = googleNumber
                ? this.phoneUtil.format(googleNumber, PhoneNumberFormat.NATIONAL)
                : '';
            if (this.separateDialCode && internationallNo) {
                this.phoneNumber = this.removeDialCode(internationallNo);
            }
            this.emitValueChange(internationallNo);
        }
    }
    onNumberKeyDown(event) {
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
        if (!allowedChars.test(event.key) &&
            !(isCtrlKey && allowedCtrlChars.test(event.key)) &&
            !allowedOtherKeys.includes(event.key)) {
            event.preventDefault();
        }
    }
    filterCountries(text) {
        return this.countries.filter((country) => {
            return (country.name.toLowerCase().indexOf(text) !== -1 ||
                country.name.toLowerCase().indexOf(text) !== -1 ||
                country.dialCode.toString().toLowerCase().indexOf(text) !== -1);
        });
    }
    getCountryIsoCode(countryCode, googleNumber) {
        const rawNumber = googleNumber.values_[2].toString();
        const countries = this.countries.filter((country) => country.dialCode === countryCode.toString());
        const mainCountry = countries.find((country) => country.areaCodes === undefined);
        const secondaryCountries = countries.filter((country) => country.areaCodes !== undefined);
        let matchedCountry = mainCountry ? mainCountry.isoCode : undefined;
        secondaryCountries.forEach((country) => {
            country.areaCodes.forEach((areaCode) => {
                if (rawNumber.startsWith(areaCode)) {
                    matchedCountry = country.isoCode;
                }
            });
        });
        return matchedCountry;
    }
    fetchAllCountries() {
        this.countries = this.ionIntlTelInputService.getListOfCountries();
    }
    getCountryByIsoCode(isoCode) {
        for (const country of this.countries) {
            if (country.isoCode === isoCode) {
                return country;
            }
        }
        console.error('tel: unknown country iso code: ', isoCode);
        return;
    }
    isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        if (typeof value === 'string' && value === '') {
            return true;
        }
        return typeof value === 'object' && Object.keys(value).length === 0;
    }
    removeDialCode(phoneNumber) {
        if (this.separateDialCode && phoneNumber) {
            phoneNumber = phoneNumber.substr(phoneNumber.indexOf(' ') + 1);
        }
        return phoneNumber;
    }
    setCountry(country) {
        this.country = country;
        this.codeChange.emit(this.country);
    }
    setPreferredCountries() {
        for (const preferedCountryIsoCode of this.preferredCountries) {
            const country = this.getCountryByIsoCode(preferedCountryIsoCode);
            country.priority = country ? 1 : country.priority;
        }
        this.countries.sort((a, b) => a.priority > b.priority ? -1 : a.priority < b.priority ? 1 : 0);
    }
}
/** @nocollapse */ IonIntlTelInputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputComponent, deps: [{ token: i0.ElementRef }, { token: i1.Platform }, { token: i2.IonIntlTelInputService }, { token: i1.ModalController }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ IonIntlTelInputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: IonIntlTelInputComponent, selector: "ion-intl-tel-input", inputs: { isEnabled: "isEnabled", autocomplete: "autocomplete", required: "required", defaultCountryiso: "defaultCountryiso", dialCodePrefix: "dialCodePrefix", enableAutoCountrySelect: "enableAutoCountrySelect", enablePlaceholder: "enablePlaceholder", fallbackPlaceholder: "fallbackPlaceholder", inputPlaceholder: "inputPlaceholder", usePatternPlaceholder: "usePatternPlaceholder", maxLength: "maxLength", modalTitle: "modalTitle", modalCssClass: "modalCssClass", modalSearchPlaceholder: "modalSearchPlaceholder", modalCloseText: "modalCloseText", modalCloseButtonSlot: "modalCloseButtonSlot", modalCanSearch: "modalCanSearch", modalShouldBackdropClose: "modalShouldBackdropClose", modalShouldFocusSearchbar: "modalShouldFocusSearchbar", modalSearchFailText: "modalSearchFailText", onlyCountries: "onlyCountries", preferredCountries: "preferredCountries", selectFirstCountry: "selectFirstCountry", separateDialCode: "separateDialCode" }, outputs: { numberChange: "numberChange", numberBlur: "numberBlur", numberFocus: "numberFocus", numberInput: "numberInput", codeChange: "codeChange", codeOpen: "codeOpen", codeClose: "codeClose", codeSelect: "codeSelect" }, host: { properties: { "class.ion-intl-tel-input": "this.cssClass", "class.ion-intl-tel-input-ios": "this.isIos", "class.ion-intl-tel-input-md": "this.isMD", "class.has-focus": "this.hasFocus", "class.ion-intl-tel-input-has-value": "this.hasValueCssClass", "class.ion-intl-tel-input-is-enabled": "this.isEnabled" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef((() => IonIntlTelInputComponent)),
            multi: true,
        },
    ], viewQueries: [{ propertyName: "numberInputEl", first: true, predicate: ["numberInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ion-button\n        fill=\"clear\"\n        class=\"ion-intl-tel-input-btn\"\n        [disabled] = \"disabled\"\n        aria-label=\"country\"\n        (click)=\"openModal()\"\n>\n  <span class=\"ion-intl-tel-input-flag fi fi-{{country.flagClass}}\"></span><span class=\"ion-intl-tel-input-code\" *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\n  <ion-icon style=\"font-size:14px;opacity:.5;\" name=\"caret-down\"></ion-icon>\n</ion-button>\n<div class=\"ion-intl-tel-input-number\">\n  <ion-input\n          #numberInput\n          [(ngModel)]=\"phoneNumber\"\n          [autocomplete]=\"autocomplete\"\n          [required]=\"required\"\n          [disabled] = \"disabled\"\n          [attr.maxLength]=\"maxLength\"\n          type=\"tel\"\n          (ionBlur)=\"onIonNumberBlur()\"\n          (ionChange)=\"onIonNumberChange($event)\"\n          (ionFocus)=\"onIonNumberFocus()\"\n          (ionInput)=\"onIonNumberInput($event)\"\n          (keydown)=\"onNumberKeyDown($event)\"\n          (ngModelChange)=\"onNumberChange()\"\n          placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder:usePatternPlaceholder}}\" >\n  </ion-input>\n</div>\n", styles: [":host{width:100%;display:flex;align-items:center}:host ion-button{color:var(--ion-color);height:100%;margin:0}:host ion-button::part(native){padding-inline-start:0;padding-inline-end:2px;margin:0;font-size:16px;font-weight:400}:host .fi{margin-right:5px}\n"], dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { kind: "component", type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { kind: "component", type: i1.IonInput, selector: "ion-input", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "legacy", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "size", "spellcheck", "step", "type", "value"] }, { kind: "directive", type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { kind: "pipe", type: i5.CountryPlaceholder, name: "countryPlaceholder" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ion-intl-tel-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => IonIntlTelInputComponent)),
                            multi: true,
                        },
                    ], template: "<ion-button\n        fill=\"clear\"\n        class=\"ion-intl-tel-input-btn\"\n        [disabled] = \"disabled\"\n        aria-label=\"country\"\n        (click)=\"openModal()\"\n>\n  <span class=\"ion-intl-tel-input-flag fi fi-{{country.flagClass}}\"></span><span class=\"ion-intl-tel-input-code\" *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\n  <ion-icon style=\"font-size:14px;opacity:.5;\" name=\"caret-down\"></ion-icon>\n</ion-button>\n<div class=\"ion-intl-tel-input-number\">\n  <ion-input\n          #numberInput\n          [(ngModel)]=\"phoneNumber\"\n          [autocomplete]=\"autocomplete\"\n          [required]=\"required\"\n          [disabled] = \"disabled\"\n          [attr.maxLength]=\"maxLength\"\n          type=\"tel\"\n          (ionBlur)=\"onIonNumberBlur()\"\n          (ionChange)=\"onIonNumberChange($event)\"\n          (ionFocus)=\"onIonNumberFocus()\"\n          (ionInput)=\"onIonNumberInput($event)\"\n          (keydown)=\"onNumberKeyDown($event)\"\n          (ngModelChange)=\"onNumberChange()\"\n          placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder:usePatternPlaceholder}}\" >\n  </ion-input>\n</div>\n", styles: [":host{width:100%;display:flex;align-items:center}:host ion-button{color:var(--ion-color);height:100%;margin:0}:host ion-button::part(native){padding-inline-start:0;padding-inline-end:2px;margin:0;font-size:16px;font-weight:400}:host .fi{margin-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.Platform }, { type: i2.IonIntlTelInputService }, { type: i1.ModalController }]; }, propDecorators: { cssClass: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input']
            }], isIos: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input-ios']
            }], isMD: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input-md']
            }], hasFocus: [{
                type: HostBinding,
                args: ['class.has-focus']
            }], hasValueCssClass: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input-has-value']
            }], isEnabled: [{
                type: HostBinding,
                args: ['class.ion-intl-tel-input-is-enabled']
            }, {
                type: Input,
                args: ['isEnabled']
            }], autocomplete: [{
                type: Input
            }], required: [{
                type: Input
            }], defaultCountryiso: [{
                type: Input
            }], dialCodePrefix: [{
                type: Input
            }], enableAutoCountrySelect: [{
                type: Input
            }], enablePlaceholder: [{
                type: Input
            }], fallbackPlaceholder: [{
                type: Input
            }], inputPlaceholder: [{
                type: Input
            }], usePatternPlaceholder: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], modalTitle: [{
                type: Input
            }], modalCssClass: [{
                type: Input
            }], modalSearchPlaceholder: [{
                type: Input
            }], modalCloseText: [{
                type: Input
            }], modalCloseButtonSlot: [{
                type: Input
            }], modalCanSearch: [{
                type: Input
            }], modalShouldBackdropClose: [{
                type: Input
            }], modalShouldFocusSearchbar: [{
                type: Input
            }], modalSearchFailText: [{
                type: Input
            }], onlyCountries: [{
                type: Input
            }], preferredCountries: [{
                type: Input
            }], selectFirstCountry: [{
                type: Input
            }], separateDialCode: [{
                type: Input
            }], numberChange: [{
                type: Output
            }], numberBlur: [{
                type: Output
            }], numberFocus: [{
                type: Output
            }], numberInput: [{
                type: Output
            }], codeChange: [{
                type: Output
            }], codeOpen: [{
                type: Output
            }], codeClose: [{
                type: Output
            }], codeSelect: [{
                type: Output
            }], numberInputEl: [{
                type: ViewChild,
                args: ['numberInput', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL2lvbi1pbnRsLXRlbC1pbnB1dC9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uLWludGwtdGVsLWlucHV0L3NyYy9saWIvaW9uLWludGwtdGVsLWlucHV0L2lvbi1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFHWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsaUJBQWlCLEdBR2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckUsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixlQUFlLEdBQ2hCLE1BQU0sdUJBQXVCLENBQUM7QUFJL0IsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7OztBQUV2RTs7R0FFRztBQWVIOzs7R0FHRztBQUNILE1BQU0sT0FBTyx3QkFBd0I7SUFVbkMsSUFDSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELElBRUksU0FBUztRQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3hCLENBQUM7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LFdBQVc7c0JBRG5CLE1BQU07Z0JBVUUsVUFBVTtzQkFEbEIsTUFBTTtnQkFVRSxRQUFRO3NCQURoQixNQUFNO2dCQVVFLFNBQVM7c0JBRGpCLE1BQU07Z0JBVUUsVUFBVTtzQkFEbEIsTUFBTTtnQkFHc0MsYUFBYTtzQkFBekQsU0FBUzt1QkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBmb3J3YXJkUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbklucHV0LCBNb2RhbENvbnRyb2xsZXIsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQge1xuICBQaG9uZU51bWJlcixcbiAgUGhvbmVOdW1iZXJGb3JtYXQsXG4gIFBob25lTnVtYmVyVXRpbCxcbn0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcblxuaW1wb3J0IHsgQ291bnRyeUkgfSBmcm9tICcuLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XG5cbmltcG9ydCB7IElvbkludGxUZWxJbnB1dFNlcnZpY2UgfSBmcm9tICcuLi9pb24taW50bC10ZWwtaW5wdXQuc2VydmljZSc7XG5pbXBvcnQgeyByYWYgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgSW9uSW50VGVsQ29kZUNvbXBvbmVudCB9IGZyb20gJy4vaW9uLWludGwtdGVsLWNvZGUuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lvbi1pbnRsLXRlbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5cbi8qKlxuICogQGF1dGhvciBBenphbSBBc2doYXIgPGF6emFtLmFzZ2hhckBpbnRlcnN0ZWxsdXMuY29tPlxuICogQGF1dGhvciBTdGV2ZSBEcmV3IDxzZHJld0B3YWl0d2VsbC5jYT5cbiAqL1xuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQnKVxuICBjc3NDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWlvcycpXG4gIGlzSW9zOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dC1tZCcpXG4gIGlzTUQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzLWZvY3VzJylcbiAgaGFzRm9jdXM7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWhhcy12YWx1ZScpXG4gIGdldCBoYXNWYWx1ZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1ZhbHVlKCk7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQtaXMtZW5hYmxlZCcpXG4gIEBJbnB1dCgnaXNFbmFibGVkJylcbiAgZ2V0IGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogYXV0b2NvbXBsZXRlLCBzZXQgdG8gJ3RlbCcgaWYgbmVlZGVkXG4gICAqXG4gICAqIEBkZWZhdWx0ICdvZmYnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXG4gIC8qKlxuICAgKiByZXF1aXJlZCwgcGFzc2VkIG9udG8gaW9uLWlucHV0IHNvIHdlIGNhbiBiZSBhY2Nlc3NpYmxpdHkgY29tcGxpYW50XG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElzbyBDb2RlIG9mIGRlZmF1bHQgc2VsZWN0ZWQgQ291bnRyeS5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRDb3VudHJ5aXNvID0gJyc7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byB1c2UgYDAwYCBvciBgK2AgYXMgZGlhbCBjb2RlIHByZWZpeC5cbiAgICogQXZhaWxhYmxlIGF0dHJpYnV0ZXMgYXJlICcrJyB8ICcwMCcuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCArXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRpYWxDb2RlUHJlZml4OiAnKycgfCAnMDAnID0gJysnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2VsZWN0IGF1dG9tYXRpYyBjb3VudHJ5IGJhc2VkIG9uIHVzZXIgaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0ID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGV4YW1wbGUgbnVtYmVyIHdpbGwgYmUgc2hvd24gYXMgYSBwbGFjZWhvbGRlciBpbiBpbnB1dC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZW5hYmxlUGxhY2Vob2xkZXIgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIGZhbGxhYmFjayBwbGFjZWhvbGRlciB0byBiZSB1c2VkIGlmIG5vIGV4YW1wbGUgbnVtYmVyIGlzIGZvdW5kIGZvciBhIGNvdW50cnkuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBmYWxsYmFja1BsYWNlaG9sZGVyID0gJyc7XG5cbiAgLyoqXG4gICAqIElmIGEgY3VzdG9tIHBsYWNlaG9sZGVyIGlzIG5lZWRlZCBmb3IgaW5wdXQuXG4gICAqIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0IGl0IHdpbGwgb3ZlcnJpZGUgYGVuYWJsZVBsYWNlaG9sZGVyYCBhbmQgb25seSB0aGlzIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2hvd24uXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpbnB1dFBsYWNlaG9sZGVyID0gJyc7XG5cbiAgLyoqXG4gICAqIEluc3RlYWQgb2YgYW4gZXhhbXBsZSBwaG9uZSBudW1iZXIsIHVzZSBhIHggcGF0dGVybi4gU3VjaCBhcyB4eHgteHh4LXh4eHgsIHRoaXMgd2lsbCBiZSBvYnRhaW5lZFxuICAgKiBiYXNlZCBvbiB0aGUgZXhhbXBsZSBudW1iZXIgZnJvbSB0aGUgZ29vZ2xlIHBob25lIGxpYi5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB1c2VQYXR0ZXJuUGxhY2Vob2xkZXIgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIExlbmd0aCBmb3IgaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnMTUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1heExlbmd0aCA9ICcxNSc7XG5cbiAgLyoqXG4gICAqIFRpdGxlIG9mIG1vZGFsIG9wZW5lZCB0byBzZWxlY3QgY291bnRyeSBkaWFsIGNvZGUuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnU2VsZWN0IENvdW50cnknXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsVGl0bGUgPSAnU2VsZWN0IENvdW50cnknO1xuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgdG8gYXR0YWNoIHRvIGRpYWwgY29kZSBzZWxlY3Rpb25tb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICdpb24taW50bC10ZWwtbW9kYWwnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ3NzQ2xhc3MgPSAnaW9uLWludGwtdGVsLW1vZGFsJztcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgZm9yIGlucHV0IGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnRW50ZXIgY291bnRyeSBuYW1lJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbFNlYXJjaFBsYWNlaG9sZGVyID0gJ0VudGVyIGNvdW50cnkgbmFtZSc7XG5cbiAgLyoqXG4gICAqIFRleHQgZm9yIGNsb3NlIGJ1dHRvbiBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0Nsb3NlJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENsb3NlVGV4dCA9ICdDbG9zZSc7XG5cbiAgLyoqXG4gICAqIFNsb3QgZm9yIGNsb3NlIGJ1dHRvbiBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLiBbSW9uaWMgc2xvdHNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2l0ZW0pIGFyZSBzdXBwb3J0ZWRcbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICdlbmQnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ2xvc2VCdXR0b25TbG90OiAnc3RhcnQnIHwgJ2VuZCcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyA9ICdlbmQnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBzaG91bGQgYmUgc2VhcmNoYWJsZSBvciBub3QuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxDYW5TZWFyY2ggPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBjbG9zZWQgb24gYmFja2Ryb3AgY2xpY2suXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTaG91bGRCYWNrZHJvcENsb3NlID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkIHdoZW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTaG91bGRGb2N1c1NlYXJjaGJhciA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgdG8gc2hvdyB3aGVuIG5vIGNvdW50cmllcyBhcmUgZm91bmQgZm9yIHNlYXJjaCBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsU2VhcmNoRmFpbFRleHQgPSAnTm8gY291bnRyaWVzIGZvdW5kJztcblxuICAvKipcbiAgICogTGlzdCBvZiBpc28gY29kZXMgb2YgbWFudWFsbHkgc2VsZWN0ZWQgY291bnRyaWVzIGFzIHN0cmluZywgd2hpY2ggd2lsbCBhcHBlYXIgaW4gdGhlIGRyb3Bkb3duLlxuICAgKiAqKk5vdGUqKjogYG9ubHlDb3VudHJpZXNgIHNob3VsZCBiZSBhIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5IGlzbyBjb2Rlcy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb25seUNvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGlzbyBjb2Rlc24gYXMgc3RyaW5nIG9mICBjb3VudHJpZXMsIHdoaWNoIHdpbGwgYXBwZWFyIGF0IHRoZSB0b3AgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogKipOb3RlKio6IGBwcmVmZXJyZWRDb3VudHJpZXNgIHNob3VsZCBiZSBhIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5IGlzbyBjb2Rlcy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcHJlZmVycmVkQ291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBmaXJzdCBjb3VudHJ5IHNob3VsZCBiZSBzZWxlY3RlZCBpbiBkaWFsIGNvZGUgc2VsZWN0IG9yIG5vdC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VsZWN0Rmlyc3RDb3VudHJ5ID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHZpc3VhbGx5IHNlcGFyYXRlIGRpYWxjb2RlIGludG8gdGhlIGRyb3AgZG93biBlbGVtZW50LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXBhcmF0ZURpYWxDb2RlID0gdHJ1ZTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGNoYW5nZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGJsdXJyZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGZvY3VzZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIFBob25lIG51bWJlciBJbnB1dC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBudW1iZXJJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNvZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZU9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBjbG9zZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZUNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBkaWFsIGNvZGUgaXMgc2VsZWN0ZWQgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjb2RlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnbnVtYmVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbnVtYmVySW5wdXRFbDogSW9uSW5wdXQ7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgPSBudWxsO1xuXG4gIGNvdW50cnk6IENvdW50cnlJO1xuICBwaG9uZU51bWJlciA9ICcnO1xuICBjb3VudHJpZXM6IENvdW50cnlJW10gPSBbXTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcGhvbmVVdGlsOiBhbnkgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcblxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBzdHJpbmcgfCBudWxsKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgICBwcml2YXRlIGlvbkludGxUZWxJbnB1dFNlcnZpY2U6IElvbkludGxUZWxJbnB1dFNlcnZpY2UsXG4gICAgICBwcml2YXRlIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyXG4gICkgeyB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XG4gIH1cblxuICBlbWl0VmFsdWVDaGFuZ2UoY2hhbmdlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoY2hhbmdlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNJb3MgPSB0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKTtcbiAgICB0aGlzLmlzTUQgPSAhdGhpcy5pc0lvcztcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1pbnRlcmFjdGl2ZScsIHRydWUpO1xuXG4gICAgdGhpcy5mZXRjaEFsbENvdW50cmllcygpO1xuICAgIHRoaXMuc2V0UHJlZmVycmVkQ291bnRyaWVzKCk7XG5cbiAgICBpZiAodGhpcy5vbmx5Q291bnRyaWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLmNvdW50cmllcy5maWx0ZXIoKGNvdW50cnk6IENvdW50cnlJKSA9PlxuICAgICAgICAgIHRoaXMub25seUNvdW50cmllcy5pbmNsdWRlcyhjb3VudHJ5Lmlzb0NvZGUpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdEZpcnN0Q291bnRyeSkge1xuICAgICAgaWYgKHRoaXMuZGVmYXVsdENvdW50cnlpc28pIHtcbiAgICAgICAgdGhpcy5zZXRDb3VudHJ5KHRoaXMuZ2V0Q291bnRyeUJ5SXNvQ29kZSh0aGlzLmRlZmF1bHRDb3VudHJ5aXNvKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGggJiZcbiAgICAgICAgICAgIHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmluY2x1ZGVzKHRoaXMuZGVmYXVsdENvdW50cnlpc28pXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNbMF0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldENvdW50cnkodGhpcy5jb3VudHJpZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChcbiAgICAgICAgdGhpcy5jb3VudHJpZXMgJiZcbiAgICAgICAgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUgJiZcbiAgICAgICAgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlICE9PVxuICAgICAgICBjaGFuZ2VzLmRlZmF1bHlDb3VudHJ5aXNvQ29kZS5wcmV2aW91c1ZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLnNldENvdW50cnkoY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5maWxsVmFsdWVzKG9iaik7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIGZpbGxWYWx1ZXModmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgZ29vZ2xlTnVtYmVyOiBQaG9uZU51bWJlcjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdvb2dsZU51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKHZhbHVlLCBudWxsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICAgIGlmICghZ29vZ2xlTnVtYmVyKSB7XG4gICAgICAgIC8vIElmIGZhaWxlZCB0byBwYXJzZSwgdHJ5IGFkZGluZyBhICsxIGFuZCBzZWUgaWYgdmFsaWRcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSAxMCAmJiB2YWx1ZS5pbmRleE9mKCcrJykgPT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgdiA9ICcrMScgKyB2YWx1ZTtcbiAgICAgICAgICBnb29nbGVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZSh2LCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFnb29nbGVOdW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dhcm5pbmc6IGZhaWxlZCB0byBwYXJzZSBudW1iZXI6ICcsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChnb29nbGVOdW1iZXIpIHtcbiAgICAgICAgbGV0IGlzb0NvZGUgPSBnb29nbGVOdW1iZXIgJiYgZ29vZ2xlTnVtYmVyLmdldENvdW50cnlDb2RlKClcbiAgICAgICAgICAgID8gdGhpcy5nZXRDb3VudHJ5SXNvQ29kZShnb29nbGVOdW1iZXIuZ2V0Q291bnRyeUNvZGUoKSwgZ29vZ2xlTnVtYmVyKVxuICAgICAgICAgICAgOiB0aGlzLmNvdW50cnkuaXNvQ29kZTtcbiAgICAgICAgaWYgKGlzb0NvZGUgJiYgaXNvQ29kZSAhPT0gdGhpcy5jb3VudHJ5Lmlzb0NvZGUpIHtcbiAgICAgICAgICBjb25zdCBuZXdDb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChcbiAgICAgICAgICAgICAgKGNvdW50cnk6IENvdW50cnlJKSA9PiBjb3VudHJ5Lmlzb0NvZGUgPT09IGlzb0NvZGVcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChuZXdDb3VudHJ5KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50cnkgPSBuZXdDb3VudHJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpc29Db2RlID0gaXNvQ29kZSA/IGlzb0NvZGUgOiB0aGlzLmNvdW50cnkgPyB0aGlzLmNvdW50cnkuaXNvQ29kZSA6IG51bGw7XG5cbiAgICAgICAgY29uc3QgaW50ZXJuYXRpb25hbGxObyA9IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpO1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRlcm5hdGlvbmFsbE5vKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGludGVybmF0aW9uYWxsTm87XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG9uQ29kZU9wZW4oKSB7XG4gICAgdGhpcy5jb2RlT3Blbi5lbWl0KCk7XG4gIH1cblxuICBhc3luYyBvcGVuTW9kYWwoKSB7XG5cbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IElvbkludFRlbENvZGVDb21wb25lbnQsXG4gICAgICBjc3NDbGFzczogdGhpcy5tb2RhbENzc0NsYXNzLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiB0aGlzLm1vZGFsU2hvdWxkQmFja2Ryb3BDbG9zZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyeSxcbiAgICAgICAgY2FuU2VhcmNoOiB0aGlzLm1vZGFsQ2FuU2VhcmNoLFxuICAgICAgICBjbG9zZUJ1dHRvblRleHQ6IHRoaXMubW9kYWxDbG9zZVRleHQsXG4gICAgICAgIGNsb3NlQnV0dG9uU2xvdDogdGhpcy5tb2RhbENsb3NlQnV0dG9uU2xvdCxcbiAgICAgICAgY291bnRyaWVzOiB0aGlzLmNvdW50cmllcyxcbiAgICAgICAgdGl0bGU6IHRoaXMubW9kYWxUaXRsZSxcbiAgICAgICAgc2VhcmNoRmFpbFRleHQ6IHRoaXMubW9kYWxTZWFyY2hGYWlsVGV4dCxcbiAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IHRoaXMubW9kYWxTZWFyY2hQbGFjZWhvbGRlcixcbiAgICAgICAgc2hvdWxkRm9jdXNTZWFyY2hiYXI6IHRoaXMubW9kYWxTaG91bGRGb2N1c1NlYXJjaGJhcixcbiAgICAgICAgZGlhbENvZGU6IHRoaXMuc2VwYXJhdGVEaWFsQ29kZSA/IHRoaXMuZGlhbENvZGVQcmVmaXggOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG4gICAgYXdhaXQgbW9kYWwucHJlc2VudCgpO1xuICAgIG1vZGFsLm9uRGlkRGlzbWlzcygpLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5kYXRhKSB7XG4gICAgICAgIHRoaXMuY291bnRyeSA9IGRhdGEuZGF0YTtcbiAgICAgICAgdGhpcy5vbkNvZGVDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgb25Db2RlQ2hhbmdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnBob25lTnVtYmVyKSkge1xuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBnb29nbGVOdW1iZXI6IFBob25lTnVtYmVyO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZ29vZ2xlTnVtYmVyID0gdGhpcy5waG9uZVV0aWwucGFyc2UoXG4gICAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICAgICAgdGhpcy5jb3VudHJ5Lmlzb0NvZGUudG9VcHBlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICAgIGNvbnN0IGludGVybmF0aW9uYWxsTm8gPSBnb29nbGVOdW1iZXJcbiAgICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpXG4gICAgICAgICAgOiAnJztcbiAgICAgIGNvbnN0IG5hdGlvbmFsTm8gPSBnb29nbGVOdW1iZXJcbiAgICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxuICAgICAgICAgIDogJyc7XG5cbiAgICAgIGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgaW50ZXJuYXRpb25hbGxObykge1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRlcm5hdGlvbmFsbE5vKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGludGVybmF0aW9uYWxsTm8pO1xuXG4gICAgICB0aGlzLmNvZGVDaGFuZ2UuZW1pdCgpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubnVtYmVySW5wdXRFbC5zZXRGb2N1cygpO1xuICAgIH0sIDQwMCk7XG4gIH1cblxuICBvbkNvZGVDbG9zZSgpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCBmYWxzZSk7XG4gICAgdGhpcy5jb2RlQ2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgb25Db2RlU2VsZWN0KCkge1xuICAgIHRoaXMuY29kZVNlbGVjdC5lbWl0KCk7XG4gIH1cblxuICBvbklvbk51bWJlckNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnNldElvbmljQ2xhc3Nlcyh0aGlzLmVsKTtcbiAgICB0aGlzLm51bWJlckNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uSW9uTnVtYmVyQmx1cigpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCBmYWxzZSk7XG4gICAgdGhpcy5udW1iZXJCbHVyLmVtaXQoKTtcbiAgfVxuXG4gIG9uSW9uTnVtYmVyRm9jdXMoKSB7XG4gICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgdGhpcy5zZXRJdGVtQ2xhc3ModGhpcy5lbCwgJ2l0ZW0taGFzLWZvY3VzJywgdHJ1ZSk7XG4gICAgdGhpcy5udW1iZXJGb2N1cy5lbWl0KCk7XG4gIH1cblxuICBvbklvbk51bWJlcklucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5udW1iZXJJbnB1dC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8vIGNhbGxlZCB2aWEgKG5nTW9kZWxDaGFuZ2UpXG4gIG9uTnVtYmVyQ2hhbmdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5waG9uZU51bWJlcikge1xuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY291bnRyeSkge1xuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UodGhpcy5kaWFsQ29kZVByZWZpeCArIHRoaXMuY291bnRyeS5kaWFsQ29kZSArICcgJyArIHRoaXMucGhvbmVOdW1iZXIpO1xuICAgIH1cbiAgICBsZXQgZ29vZ2xlTnVtYmVyOiBQaG9uZU51bWJlcjtcbiAgICB0cnkge1xuICAgICAgZ29vZ2xlTnVtYmVyID0gdGhpcy5waG9uZVV0aWwucGFyc2UoXG4gICAgICAgICAgdGhpcy5waG9uZU51bWJlcixcbiAgICAgICAgICB0aGlzLmNvdW50cnkuaXNvQ29kZS50b1VwcGVyQ2FzZSgpXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaXNvQ29kZSA9IHRoaXMuY291bnRyeSA/IHRoaXMuY291bnRyeS5pc29Db2RlIDogbnVsbDtcbiAgICAvLyBhdXRvIHNlbGVjdCBjb3VudHJ5IGJhc2VkIG9uIHRoZSBleHRlbnNpb24gKGFuZCBhcmVhQ29kZSBpZiBuZWVkZWQpIChlLmcgc2VsZWN0IENhbmFkYSBpZiBudW1iZXIgc3RhcnRzIHdpdGggKzEgNDE2KVxuICAgIGlmICh0aGlzLmVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0KSB7XG4gICAgICBpc29Db2RlID1cbiAgICAgICAgICBnb29nbGVOdW1iZXIgJiYgZ29vZ2xlTnVtYmVyLmdldENvdW50cnlDb2RlKClcbiAgICAgICAgICAgICAgPyB0aGlzLmdldENvdW50cnlJc29Db2RlKGdvb2dsZU51bWJlci5nZXRDb3VudHJ5Q29kZSgpLCBnb29nbGVOdW1iZXIpXG4gICAgICAgICAgICAgIDogdGhpcy5jb3VudHJ5Lmlzb0NvZGU7XG4gICAgICBpZiAoaXNvQ29kZSAmJiBpc29Db2RlICE9PSB0aGlzLmNvdW50cnkuaXNvQ29kZSkge1xuICAgICAgICBjb25zdCBuZXdDb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChcbiAgICAgICAgICAgIChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gY291bnRyeS5pc29Db2RlID09PSBpc29Db2RlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChuZXdDb3VudHJ5KSB7XG4gICAgICAgICAgdGhpcy5jb3VudHJ5ID0gbmV3Q291bnRyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpc29Db2RlID0gaXNvQ29kZSA/IGlzb0NvZGUgOiB0aGlzLmNvdW50cnkgPyB0aGlzLmNvdW50cnkuaXNvQ29kZSA6IG51bGw7XG5cbiAgICBpZiAoIXRoaXMucGhvbmVOdW1iZXIgfHwgIWlzb0NvZGUpIHtcbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbnRlcm5hdGlvbmFsbE5vID0gZ29vZ2xlTnVtYmVyXG4gICAgICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxuICAgICAgICAgIDogJyc7XG4gICAgICBjb25zdCBuYXRpb25hbE5vID0gZ29vZ2xlTnVtYmVyXG4gICAgICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTClcbiAgICAgICAgICA6ICcnO1xuXG4gICAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGVybmF0aW9uYWxsTm8pIHtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50ZXJuYXRpb25hbGxObyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGludGVybmF0aW9uYWxsTm8pO1xuICAgIH1cbiAgfVxuXG4gIG9uTnVtYmVyS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGFsbG93ZWRDaGFycyA9IC9eWzAtOVxcK1xcLVxcIF0vO1xuICAgIGNvbnN0IGFsbG93ZWRDdHJsQ2hhcnMgPSAvW2F4Y3ZdLztcbiAgICBjb25zdCBhbGxvd2VkT3RoZXJLZXlzID0gW1xuICAgICAgJ0Fycm93TGVmdCcsXG4gICAgICAnQXJyb3dVcCcsXG4gICAgICAnQXJyb3dSaWdodCcsXG4gICAgICAnQXJyb3dEb3duJyxcbiAgICAgICdIb21lJyxcbiAgICAgICdFbmQnLFxuICAgICAgJ0luc2VydCcsXG4gICAgICAnRGVsZXRlJyxcbiAgICAgICdCYWNrc3BhY2UnLFxuICAgICAgJ1RhYicsXG4gICAgXTtcbiAgICBjb25zdCBpc0N0cmxLZXkgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXk7XG5cbiAgICBpZiAoXG4gICAgICAgICFhbGxvd2VkQ2hhcnMudGVzdChldmVudC5rZXkpICYmXG4gICAgICAgICEoaXNDdHJsS2V5ICYmIGFsbG93ZWRDdHJsQ2hhcnMudGVzdChldmVudC5rZXkpKSAmJlxuICAgICAgICAhYWxsb3dlZE90aGVyS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpXG4gICAgKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQ291bnRyaWVzKHRleHQ6IHN0cmluZyk6IENvdW50cnlJW10ge1xuICAgIHJldHVybiB0aGlzLmNvdW50cmllcy5maWx0ZXIoKGNvdW50cnkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSAhPT0gLTEgfHxcbiAgICAgICAgICBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpICE9PSAtMSB8fFxuICAgICAgICAgIGNvdW50cnkuZGlhbENvZGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgIT09IC0xXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudHJ5SXNvQ29kZShcbiAgICAgIGNvdW50cnlDb2RlOiBudW1iZXIsXG4gICAgICBnb29nbGVOdW1iZXI6IFBob25lTnVtYmVyXG4gICk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgcmF3TnVtYmVyID0gKGdvb2dsZU51bWJlciBhcyBhbnkpLnZhbHVlc19bMl0udG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IGNvdW50cmllcyA9IHRoaXMuY291bnRyaWVzLmZpbHRlcihcbiAgICAgICAgKGNvdW50cnk6IENvdW50cnlJKSA9PiBjb3VudHJ5LmRpYWxDb2RlID09PSBjb3VudHJ5Q29kZS50b1N0cmluZygpXG4gICAgKTtcbiAgICBjb25zdCBtYWluQ291bnRyeSA9IGNvdW50cmllcy5maW5kKFxuICAgICAgICAoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuYXJlYUNvZGVzID09PSB1bmRlZmluZWRcbiAgICApO1xuICAgIGNvbnN0IHNlY29uZGFyeUNvdW50cmllcyA9IGNvdW50cmllcy5maWx0ZXIoXG4gICAgICAgIChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gY291bnRyeS5hcmVhQ29kZXMgIT09IHVuZGVmaW5lZFxuICAgICk7XG5cbiAgICBsZXQgbWF0Y2hlZENvdW50cnkgPSBtYWluQ291bnRyeSA/IG1haW5Db3VudHJ5Lmlzb0NvZGUgOiB1bmRlZmluZWQ7XG5cbiAgICBzZWNvbmRhcnlDb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xuICAgICAgY291bnRyeS5hcmVhQ29kZXMuZm9yRWFjaCgoYXJlYUNvZGUpID0+IHtcbiAgICAgICAgaWYgKHJhd051bWJlci5zdGFydHNXaXRoKGFyZWFDb2RlKSkge1xuICAgICAgICAgIG1hdGNoZWRDb3VudHJ5ID0gY291bnRyeS5pc29Db2RlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hlZENvdW50cnk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoQWxsQ291bnRyaWVzKCkge1xuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5pb25JbnRsVGVsSW5wdXRTZXJ2aWNlLmdldExpc3RPZkNvdW50cmllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudHJ5QnlJc29Db2RlKGlzb0NvZGU6IHN0cmluZyk6IENvdW50cnlJIHtcbiAgICBmb3IgKGNvbnN0IGNvdW50cnkgb2YgdGhpcy5jb3VudHJpZXMpIHtcbiAgICAgIGlmIChjb3VudHJ5Lmlzb0NvZGUgPT09IGlzb0NvZGUpIHtcbiAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ3RlbDogdW5rbm93biBjb3VudHJ5IGlzbyBjb2RlOiAnLCBpc29Db2RlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIGlzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEaWFsQ29kZShwaG9uZU51bWJlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIHBob25lTnVtYmVyKSB7XG4gICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cihwaG9uZU51bWJlci5pbmRleE9mKCcgJykgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHBob25lTnVtYmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb3VudHJ5KGNvdW50cnk6IENvdW50cnlJKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLmNvZGVDaGFuZ2UuZW1pdCh0aGlzLmNvdW50cnkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQcmVmZXJyZWRDb3VudHJpZXMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcmVmZXJlZENvdW50cnlJc29Db2RlIG9mIHRoaXMucHJlZmVycmVkQ291bnRyaWVzKSB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5QnlJc29Db2RlKHByZWZlcmVkQ291bnRyeUlzb0NvZGUpO1xuICAgICAgY291bnRyeS5wcmlvcml0eSA9IGNvdW50cnkgPyAxIDogY291bnRyeS5wcmlvcml0eTtcbiAgICB9XG4gICAgdGhpcy5jb3VudHJpZXMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgYS5wcmlvcml0eSA+IGIucHJpb3JpdHkgPyAtMSA6IGEucHJpb3JpdHkgPCBiLnByaW9yaXR5ID8gMSA6IDBcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydHNXaXRoID0gKGlucHV0OiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGlucHV0LnN1YnN0cigwLCBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbGFzc2VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gY2xhc3NMaXN0Lml0ZW0oaSk7XG4gICAgICBpZiAoaXRlbSAhPT0gbnVsbCAmJiB0aGlzLnN0YXJ0c1dpdGgoaXRlbSwgJ25nLScpKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChgaW9uLSR7aXRlbS5zdWJzdHIoMyl9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc2VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIFtcbiAgICAgICdpb24tdmFsaWQnLFxuICAgICAgJ2lvbi1pbnZhbGlkJyxcbiAgICAgICdpb24tdG91Y2hlZCcsXG4gICAgICAnaW9uLXVudG91Y2hlZCcsXG4gICAgICAnaW9uLWRpcnR5JyxcbiAgICAgICdpb24tcHJpc3RpbmUnLFxuICAgIF0uZm9yRWFjaCgoYykgPT4gY2xhc3NMaXN0LnJlbW92ZShjKSk7XG5cbiAgICBjbGFzc2VzLmZvckVhY2goKGMpID0+IGNsYXNzTGlzdC5hZGQoYykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJb25pY0NsYXNzZXMgPSAoZWxlbWVudDogRWxlbWVudFJlZikgPT4ge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmdldENsYXNzZXMoaW5wdXQpO1xuICAgICAgdGhpcy5zZXRDbGFzc2VzKGlucHV0LCBjbGFzc2VzKTtcblxuICAgICAgY29uc3QgaXRlbSA9IGlucHV0LmNsb3Nlc3QoJ2lvbi1pdGVtJyk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLnNldENsYXNzZXMoaXRlbSwgY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEl0ZW1DbGFzcyA9IChcbiAgICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICBjbGFzc05hbWU6IHN0cmluZyxcbiAgICAgIGFkZENsYXNzOiBib29sZWFuXG4gICkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGl0ZW0gPSBpbnB1dC5jbG9zZXN0KCdpb24taXRlbScpO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBpdGVtLmNsYXNzTGlzdDtcbiAgICAgIGlmIChhZGRDbGFzcykge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8aW9uLWJ1dHRvblxuICAgICAgICBmaWxsPVwiY2xlYXJcIlxuICAgICAgICBjbGFzcz1cImlvbi1pbnRsLXRlbC1pbnB1dC1idG5cIlxuICAgICAgICBbZGlzYWJsZWRdID0gXCJkaXNhYmxlZFwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJjb3VudHJ5XCJcbiAgICAgICAgKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCJcbj5cbiAgPHNwYW4gY2xhc3M9XCJpb24taW50bC10ZWwtaW5wdXQtZmxhZyBmaSBmaS17e2NvdW50cnkuZmxhZ0NsYXNzfX1cIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJpb24taW50bC10ZWwtaW5wdXQtY29kZVwiICpuZ0lmPVwic2VwYXJhdGVEaWFsQ29kZVwiPnt7ZGlhbENvZGVQcmVmaXh9fXt7Y291bnRyeS5kaWFsQ29kZX19PC9zcGFuPlxuICA8aW9uLWljb24gc3R5bGU9XCJmb250LXNpemU6MTRweDtvcGFjaXR5Oi41O1wiIG5hbWU9XCJjYXJldC1kb3duXCI+PC9pb24taWNvbj5cbjwvaW9uLWJ1dHRvbj5cbjxkaXYgY2xhc3M9XCJpb24taW50bC10ZWwtaW5wdXQtbnVtYmVyXCI+XG4gIDxpb24taW5wdXRcbiAgICAgICAgICAjbnVtYmVySW5wdXRcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cInBob25lTnVtYmVyXCJcbiAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgICBbZGlzYWJsZWRdID0gXCJkaXNhYmxlZFwiXG4gICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXG4gICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgKGlvbkJsdXIpPVwib25Jb25OdW1iZXJCbHVyKClcIlxuICAgICAgICAgIChpb25DaGFuZ2UpPVwib25Jb25OdW1iZXJDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKGlvbkZvY3VzKT1cIm9uSW9uTnVtYmVyRm9jdXMoKVwiXG4gICAgICAgICAgKGlvbklucHV0KT1cIm9uSW9uTnVtYmVySW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgKGtleWRvd24pPVwib25OdW1iZXJLZXlEb3duKCRldmVudClcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTnVtYmVyQ2hhbmdlKClcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tjb3VudHJ5IHwgY291bnRyeVBsYWNlaG9sZGVyOiBpbnB1dFBsYWNlaG9sZGVyOnNlcGFyYXRlRGlhbENvZGU6ZmFsbGJhY2tQbGFjZWhvbGRlcjp1c2VQYXR0ZXJuUGxhY2Vob2xkZXJ9fVwiID5cbiAgPC9pb24taW5wdXQ+XG48L2Rpdj5cbiJdfQ==