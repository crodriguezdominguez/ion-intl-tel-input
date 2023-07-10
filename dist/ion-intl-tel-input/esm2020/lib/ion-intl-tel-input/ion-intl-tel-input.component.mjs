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
const _c0 = ["numberInput"];
function IonIntlTelInputComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r0.dialCodePrefix, "", ctx_r0.country.dialCode, "");
} }
const _c1 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
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
/** @nocollapse */ IonIntlTelInputComponent.ɵfac = function IonIntlTelInputComponent_Factory(t) { return new (t || IonIntlTelInputComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Platform), i0.ɵɵdirectiveInject(i2.IonIntlTelInputService), i0.ɵɵdirectiveInject(i1.ModalController)); };
/** @nocollapse */ IonIntlTelInputComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: IonIntlTelInputComponent, selectors: [["ion-intl-tel-input"]], viewQuery: function IonIntlTelInputComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.numberInputEl = _t.first);
    } }, hostVars: 12, hostBindings: function IonIntlTelInputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("ion-intl-tel-input", ctx.cssClass)("ion-intl-tel-input-ios", ctx.isIos)("ion-intl-tel-input-md", ctx.isMD)("has-focus", ctx.hasFocus)("ion-intl-tel-input-has-value", ctx.hasValueCssClass)("ion-intl-tel-input-is-enabled", ctx.isEnabled);
    } }, inputs: { isEnabled: "isEnabled", autocomplete: "autocomplete", required: "required", defaultCountryiso: "defaultCountryiso", dialCodePrefix: "dialCodePrefix", enableAutoCountrySelect: "enableAutoCountrySelect", enablePlaceholder: "enablePlaceholder", fallbackPlaceholder: "fallbackPlaceholder", inputPlaceholder: "inputPlaceholder", usePatternPlaceholder: "usePatternPlaceholder", maxLength: "maxLength", modalTitle: "modalTitle", modalCssClass: "modalCssClass", modalSearchPlaceholder: "modalSearchPlaceholder", modalCloseText: "modalCloseText", modalCloseButtonSlot: "modalCloseButtonSlot", modalCanSearch: "modalCanSearch", modalShouldBackdropClose: "modalShouldBackdropClose", modalShouldFocusSearchbar: "modalShouldFocusSearchbar", modalSearchFailText: "modalSearchFailText", onlyCountries: "onlyCountries", preferredCountries: "preferredCountries", selectFirstCountry: "selectFirstCountry", separateDialCode: "separateDialCode" }, outputs: { numberChange: "numberChange", numberBlur: "numberBlur", numberFocus: "numberFocus", numberInput: "numberInput", codeChange: "codeChange", codeOpen: "codeOpen", codeClose: "codeClose", codeSelect: "codeSelect" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => IonIntlTelInputComponent)),
                multi: true,
            },
        ]), i0.ɵɵNgOnChangesFeature], decls: 8, vars: 23, consts: [["fill", "clear", "aria-label", "country", 1, "ion-intl-tel-input-btn", 3, "disabled", "click"], ["class", "ion-intl-tel-input-code", 4, "ngIf"], ["name", "caret-down", 2, "font-size", "14px", "opacity", ".5"], [1, "ion-intl-tel-input-number"], ["type", "tel", 3, "ngModel", "autocomplete", "required", "disabled", "placeholder", "ngModelChange", "ionBlur", "ionChange", "ionFocus", "ionInput", "keydown"], ["numberInput", ""], [1, "ion-intl-tel-input-code"]], template: function IonIntlTelInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ion-button", 0);
        i0.ɵɵlistener("click", function IonIntlTelInputComponent_Template_ion_button_click_0_listener() { return ctx.openModal(); });
        i0.ɵɵelement(1, "span");
        i0.ɵɵtemplate(2, IonIntlTelInputComponent_span_2_Template, 2, 2, "span", 1);
        i0.ɵɵelement(3, "ion-icon", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3)(5, "ion-input", 4, 5);
        i0.ɵɵlistener("ngModelChange", function IonIntlTelInputComponent_Template_ion_input_ngModelChange_5_listener($event) { return ctx.phoneNumber = $event; })("ionBlur", function IonIntlTelInputComponent_Template_ion_input_ionBlur_5_listener() { return ctx.onIonNumberBlur(); })("ionChange", function IonIntlTelInputComponent_Template_ion_input_ionChange_5_listener($event) { return ctx.onIonNumberChange($event); })("ionFocus", function IonIntlTelInputComponent_Template_ion_input_ionFocus_5_listener() { return ctx.onIonNumberFocus(); })("ionInput", function IonIntlTelInputComponent_Template_ion_input_ionInput_5_listener($event) { return ctx.onIonNumberInput($event); })("keydown", function IonIntlTelInputComponent_Template_ion_input_keydown_5_listener($event) { return ctx.onNumberKeyDown($event); })("ngModelChange", function IonIntlTelInputComponent_Template_ion_input_ngModelChange_5_listener() { return ctx.onNumberChange(); });
        i0.ɵɵpipe(7, "countryPlaceholder");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("ion-intl-tel-input-flag fi fi-", ctx.country.flagClass, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.separateDialCode);
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBindV(7, 11, i0.ɵɵpureFunction5(17, _c1, ctx.country, ctx.inputPlaceholder, ctx.separateDialCode, ctx.fallbackPlaceholder, ctx.usePatternPlaceholder)));
        i0.ɵɵproperty("ngModel", ctx.phoneNumber)("autocomplete", ctx.autocomplete)("required", ctx.required)("disabled", ctx.disabled);
        i0.ɵɵattribute("maxLength", ctx.maxLength);
    } }, dependencies: [i3.NgIf, i4.NgControlStatus, i4.RequiredValidator, i4.NgModel, i1.IonButton, i1.IonIcon, i1.IonInput, i1.TextValueAccessor, i5.CountryPlaceholder], styles: ["[_nghost-%COMP%]{width:100%;display:flex;align-items:center}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{color:var(--ion-color);height:100%;margin:0}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]::part(native){padding-inline-start:0;padding-inline-end:2px;margin:0;font-size:16px;font-weight:400}[_nghost-%COMP%]   .fi[_ngcontent-%COMP%]{margin-right:5px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonIntlTelInputComponent, [{
        type: Component,
        args: [{ selector: 'ion-intl-tel-input', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((() => IonIntlTelInputComponent)),
                        multi: true,
                    },
                ], template: "<ion-button\n        fill=\"clear\"\n        class=\"ion-intl-tel-input-btn\"\n        [disabled] = \"disabled\"\n        aria-label=\"country\"\n        (click)=\"openModal()\"\n>\n  <span class=\"ion-intl-tel-input-flag fi fi-{{country.flagClass}}\"></span><span class=\"ion-intl-tel-input-code\" *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\n  <ion-icon style=\"font-size:14px;opacity:.5;\" name=\"caret-down\"></ion-icon>\n</ion-button>\n<div class=\"ion-intl-tel-input-number\">\n  <ion-input\n          #numberInput\n          [(ngModel)]=\"phoneNumber\"\n          [autocomplete]=\"autocomplete\"\n          [required]=\"required\"\n          [disabled] = \"disabled\"\n          [attr.maxLength]=\"maxLength\"\n          type=\"tel\"\n          (ionBlur)=\"onIonNumberBlur()\"\n          (ionChange)=\"onIonNumberChange($event)\"\n          (ionFocus)=\"onIonNumberFocus()\"\n          (ionInput)=\"onIonNumberInput($event)\"\n          (keydown)=\"onNumberKeyDown($event)\"\n          (ngModelChange)=\"onNumberChange()\"\n          placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder:usePatternPlaceholder}}\" >\n  </ion-input>\n</div>\n", styles: [":host{width:100%;display:flex;align-items:center}:host ion-button{color:var(--ion-color);height:100%;margin:0}:host ion-button::part(native){padding-inline-start:0;padding-inline-end:2px;margin:0;font-size:16px;font-weight:400}:host .fi{margin-right:5px}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.Platform }, { type: i2.IonIntlTelInputService }, { type: i1.ModalController }]; }, { cssClass: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL2lvbi1pbnRsLXRlbC1pbnB1dC9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uLWludGwtdGVsLWlucHV0L3NyYy9saWIvaW9uLWludGwtdGVsLWlucHV0L2lvbi1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFHWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsaUJBQWlCLEdBR2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckUsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixlQUFlLEdBQ2hCLE1BQU0sdUJBQXVCLENBQUM7QUFJL0IsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7O0lDekJJLCtCQUErRDtJQUFBLFlBQXNDO0lBQUEsaUJBQU87OztJQUE3QyxlQUFzQztJQUF0QyxpRkFBc0M7OztBRDJCaEw7O0dBRUc7QUFlSDs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sd0JBQXdCO0lBVW5DLElBQ0ksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pC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QUFxQjtrQkFEcEIsS0FBSztZQVdOLFNBQVM7a0JBRFIsS0FBSztZQVdOLFVBQVU7a0JBRFQsS0FBSztZQVdOLGFBQWE7a0JBRFosS0FBSztZQVdOLHNCQUFzQjtrQkFEckIsS0FBSztZQVdOLGNBQWM7a0JBRGIsS0FBSztZQVdOLG9CQUFvQjtrQkFEbkIsS0FBSztZQVdOLGNBQWM7a0JBRGIsS0FBSztZQVdOLHdCQUF3QjtrQkFEdkIsS0FBSztZQVdOLHlCQUF5QjtrQkFEeEIsS0FBSztZQVdOLG1CQUFtQjtrQkFEbEIsS0FBSztZQVlOLGFBQWE7a0JBRFosS0FBSztZQVlOLGtCQUFrQjtrQkFEakIsS0FBSztZQVdOLGtCQUFrQjtrQkFEakIsS0FBSztZQVdOLGdCQUFnQjtrQkFEZixLQUFLO1lBVUcsWUFBWTtrQkFEcEIsTUFBTTtZQVVFLFVBQVU7a0JBRGxCLE1BQU07WUFVRSxXQUFXO2tCQURuQixNQUFNO1lBVUUsV0FBVztrQkFEbkIsTUFBTTtZQVVFLFVBQVU7a0JBRGxCLE1BQU07WUFVRSxRQUFRO2tCQURoQixNQUFNO1lBVUUsU0FBUztrQkFEakIsTUFBTTtZQVVFLFVBQVU7a0JBRGxCLE1BQU07WUFHc0MsYUFBYTtrQkFBekQsU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBmb3J3YXJkUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IElvbklucHV0LCBNb2RhbENvbnRyb2xsZXIsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQge1xuICBQaG9uZU51bWJlcixcbiAgUGhvbmVOdW1iZXJGb3JtYXQsXG4gIFBob25lTnVtYmVyVXRpbCxcbn0gZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcblxuaW1wb3J0IHsgQ291bnRyeUkgfSBmcm9tICcuLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XG5cbmltcG9ydCB7IElvbkludGxUZWxJbnB1dFNlcnZpY2UgfSBmcm9tICcuLi9pb24taW50bC10ZWwtaW5wdXQuc2VydmljZSc7XG5pbXBvcnQgeyByYWYgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHsgSW9uSW50VGVsQ29kZUNvbXBvbmVudCB9IGZyb20gJy4vaW9uLWludGwtdGVsLWNvZGUuY29tcG9uZW50JztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lvbi1pbnRsLXRlbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5cbi8qKlxuICogQGF1dGhvciBBenphbSBBc2doYXIgPGF6emFtLmFzZ2hhckBpbnRlcnN0ZWxsdXMuY29tPlxuICogQGF1dGhvciBTdGV2ZSBEcmV3IDxzZHJld0B3YWl0d2VsbC5jYT5cbiAqL1xuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQnKVxuICBjc3NDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWlvcycpXG4gIGlzSW9zOiBib29sZWFuO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbi1pbnRsLXRlbC1pbnB1dC1tZCcpXG4gIGlzTUQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGFzLWZvY3VzJylcbiAgaGFzRm9jdXM7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uLWludGwtdGVsLWlucHV0LWhhcy12YWx1ZScpXG4gIGdldCBoYXNWYWx1ZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmhhc1ZhbHVlKCk7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb24taW50bC10ZWwtaW5wdXQtaXMtZW5hYmxlZCcpXG4gIEBJbnB1dCgnaXNFbmFibGVkJylcbiAgZ2V0IGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogYXV0b2NvbXBsZXRlLCBzZXQgdG8gJ3RlbCcgaWYgbmVlZGVkXG4gICAqXG4gICAqIEBkZWZhdWx0ICdvZmYnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuXG4gIC8qKlxuICAgKiByZXF1aXJlZCwgcGFzc2VkIG9udG8gaW9uLWlucHV0IHNvIHdlIGNhbiBiZSBhY2Nlc3NpYmxpdHkgY29tcGxpYW50XG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElzbyBDb2RlIG9mIGRlZmF1bHQgc2VsZWN0ZWQgQ291bnRyeS5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICcnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRlZmF1bHRDb3VudHJ5aXNvID0gJyc7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byB1c2UgYDAwYCBvciBgK2AgYXMgZGlhbCBjb2RlIHByZWZpeC5cbiAgICogQXZhaWxhYmxlIGF0dHJpYnV0ZXMgYXJlICcrJyB8ICcwMCcuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCArXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGRpYWxDb2RlUHJlZml4OiAnKycgfCAnMDAnID0gJysnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2VsZWN0IGF1dG9tYXRpYyBjb3VudHJ5IGJhc2VkIG9uIHVzZXIgaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0ID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGV4YW1wbGUgbnVtYmVyIHdpbGwgYmUgc2hvd24gYXMgYSBwbGFjZWhvbGRlciBpbiBpbnB1dC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZW5hYmxlUGxhY2Vob2xkZXIgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIGZhbGxhYmFjayBwbGFjZWhvbGRlciB0byBiZSB1c2VkIGlmIG5vIGV4YW1wbGUgbnVtYmVyIGlzIGZvdW5kIGZvciBhIGNvdW50cnkuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBmYWxsYmFja1BsYWNlaG9sZGVyID0gJyc7XG5cbiAgLyoqXG4gICAqIElmIGEgY3VzdG9tIHBsYWNlaG9sZGVyIGlzIG5lZWRlZCBmb3IgaW5wdXQuXG4gICAqIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0IGl0IHdpbGwgb3ZlcnJpZGUgYGVuYWJsZVBsYWNlaG9sZGVyYCBhbmQgb25seSB0aGlzIHBsYWNlaG9sZGVyIHdpbGwgYmUgc2hvd24uXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpbnB1dFBsYWNlaG9sZGVyID0gJyc7XG5cbiAgLyoqXG4gICAqIEluc3RlYWQgb2YgYW4gZXhhbXBsZSBwaG9uZSBudW1iZXIsIHVzZSBhIHggcGF0dGVybi4gU3VjaCBhcyB4eHgteHh4LXh4eHgsIHRoaXMgd2lsbCBiZSBvYnRhaW5lZFxuICAgKiBiYXNlZCBvbiB0aGUgZXhhbXBsZSBudW1iZXIgZnJvbSB0aGUgZ29vZ2xlIHBob25lIGxpYi5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB1c2VQYXR0ZXJuUGxhY2Vob2xkZXIgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBNYXhpbXVtIExlbmd0aCBmb3IgaW5wdXQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnMTUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1heExlbmd0aCA9ICcxNSc7XG5cbiAgLyoqXG4gICAqIFRpdGxlIG9mIG1vZGFsIG9wZW5lZCB0byBzZWxlY3QgY291bnRyeSBkaWFsIGNvZGUuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnU2VsZWN0IENvdW50cnknXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsVGl0bGUgPSAnU2VsZWN0IENvdW50cnknO1xuXG4gIC8qKlxuICAgKiBDU1MgY2xhc3MgdG8gYXR0YWNoIHRvIGRpYWwgY29kZSBzZWxlY3Rpb25tb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICdpb24taW50bC10ZWwtbW9kYWwnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ3NzQ2xhc3MgPSAnaW9uLWludGwtdGVsLW1vZGFsJztcblxuICAvKipcbiAgICogUGxhY2Vob2xkZXIgZm9yIGlucHV0IGluIGRpYWwgY29kZSBzZWxlY3Rpb24gbW9kYWwuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnRW50ZXIgY291bnRyeSBuYW1lJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbFNlYXJjaFBsYWNlaG9sZGVyID0gJ0VudGVyIGNvdW50cnkgbmFtZSc7XG5cbiAgLyoqXG4gICAqIFRleHQgZm9yIGNsb3NlIGJ1dHRvbiBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0Nsb3NlJ1xuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbENsb3NlVGV4dCA9ICdDbG9zZSc7XG5cbiAgLyoqXG4gICAqIFNsb3QgZm9yIGNsb3NlIGJ1dHRvbiBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLiBbSW9uaWMgc2xvdHNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2l0ZW0pIGFyZSBzdXBwb3J0ZWRcbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0ICdlbmQnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsQ2xvc2VCdXR0b25TbG90OiAnc3RhcnQnIHwgJ2VuZCcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyA9ICdlbmQnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBzaG91bGQgYmUgc2VhcmNoYWJsZSBvciBub3QuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxDYW5TZWFyY2ggPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBjbG9zZWQgb24gYmFja2Ryb3AgY2xpY2suXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTaG91bGRCYWNrZHJvcENsb3NlID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGlucHV0IHNob3VsZCBiZSBmb2N1c2VkIHdoZW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAZGVmYXVsdCAndHJ1ZSdcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxTaG91bGRGb2N1c1NlYXJjaGJhciA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE1lc3NhZ2UgdG8gc2hvdyB3aGVuIG5vIGNvdW50cmllcyBhcmUgZm91bmQgZm9yIHNlYXJjaCBpbiBkaWFsIGNvZGUgc2VsZWN0aW9uIG1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3RydWUnXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIG1vZGFsU2VhcmNoRmFpbFRleHQgPSAnTm8gY291bnRyaWVzIGZvdW5kJztcblxuICAvKipcbiAgICogTGlzdCBvZiBpc28gY29kZXMgb2YgbWFudWFsbHkgc2VsZWN0ZWQgY291bnRyaWVzIGFzIHN0cmluZywgd2hpY2ggd2lsbCBhcHBlYXIgaW4gdGhlIGRyb3Bkb3duLlxuICAgKiAqKk5vdGUqKjogYG9ubHlDb3VudHJpZXNgIHNob3VsZCBiZSBhIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5IGlzbyBjb2Rlcy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgb25seUNvdW50cmllczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGlzbyBjb2Rlc24gYXMgc3RyaW5nIG9mICBjb3VudHJpZXMsIHdoaWNoIHdpbGwgYXBwZWFyIGF0IHRoZSB0b3AgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogKipOb3RlKio6IGBwcmVmZXJyZWRDb3VudHJpZXNgIHNob3VsZCBiZSBhIHN0cmluZyBhcnJheSBvZiBjb3VudHJ5IGlzbyBjb2Rlcy5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgcHJlZmVycmVkQ291bnRyaWVzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBmaXJzdCBjb3VudHJ5IHNob3VsZCBiZSBzZWxlY3RlZCBpbiBkaWFsIGNvZGUgc2VsZWN0IG9yIG5vdC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VsZWN0Rmlyc3RDb3VudHJ5ID0gdHJ1ZTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHZpc3VhbGx5IHNlcGFyYXRlIGRpYWxjb2RlIGludG8gdGhlIGRyb3AgZG93biBlbGVtZW50LlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzZXBhcmF0ZURpYWxDb2RlID0gdHJ1ZTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGNoYW5nZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGJsdXJyZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgUGhvbmUgbnVtYmVyIElucHV0IGlzIGZvY3VzZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnVtYmVyRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIFBob25lIG51bWJlciBJbnB1dC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBudW1iZXJJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBpcyBjaGFuZ2VkLlxuICAgKiBTZWUgbW9yZSBvbi5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbkludGxUZWxJbnB1dENvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNvZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBvcGVuZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZU9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiB0aGUgZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbCBpcyBjbG9zZWQuXG4gICAqIFNlZSBtb3JlIG9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uSW50bFRlbElucHV0Q29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY29kZUNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYSBkaWFsIGNvZGUgaXMgc2VsZWN0ZWQgaW4gZGlhbCBjb2RlIHNlbGVjdGlvbiBtb2RhbC5cbiAgICogU2VlIG1vcmUgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25JbnRsVGVsSW5wdXRDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjb2RlU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQFZpZXdDaGlsZCgnbnVtYmVySW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgbnVtYmVySW5wdXRFbDogSW9uSW5wdXQ7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgPSBudWxsO1xuXG4gIGNvdW50cnk6IENvdW50cnlJO1xuICBwaG9uZU51bWJlciA9ICcnO1xuICBjb3VudHJpZXM6IENvdW50cnlJW10gPSBbXTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgcGhvbmVVdGlsOiBhbnkgPSBQaG9uZU51bWJlclV0aWwuZ2V0SW5zdGFuY2UoKTtcblxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBzdHJpbmcgfCBudWxsKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgICBwcml2YXRlIGlvbkludGxUZWxJbnB1dFNlcnZpY2U6IElvbkludGxUZWxJbnB1dFNlcnZpY2UsXG4gICAgICBwcml2YXRlIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyXG4gICkgeyB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5lbCk7XG4gIH1cblxuICBlbWl0VmFsdWVDaGFuZ2UoY2hhbmdlOiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UoY2hhbmdlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNJb3MgPSB0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKTtcbiAgICB0aGlzLmlzTUQgPSAhdGhpcy5pc0lvcztcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1pbnRlcmFjdGl2ZScsIHRydWUpO1xuXG4gICAgdGhpcy5mZXRjaEFsbENvdW50cmllcygpO1xuICAgIHRoaXMuc2V0UHJlZmVycmVkQ291bnRyaWVzKCk7XG5cbiAgICBpZiAodGhpcy5vbmx5Q291bnRyaWVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLmNvdW50cmllcy5maWx0ZXIoKGNvdW50cnk6IENvdW50cnlJKSA9PlxuICAgICAgICAgIHRoaXMub25seUNvdW50cmllcy5pbmNsdWRlcyhjb3VudHJ5Lmlzb0NvZGUpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdEZpcnN0Q291bnRyeSkge1xuICAgICAgaWYgKHRoaXMuZGVmYXVsdENvdW50cnlpc28pIHtcbiAgICAgICAgdGhpcy5zZXRDb3VudHJ5KHRoaXMuZ2V0Q291bnRyeUJ5SXNvQ29kZSh0aGlzLmRlZmF1bHRDb3VudHJ5aXNvKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGggJiZcbiAgICAgICAgICAgIHRoaXMucHJlZmVycmVkQ291bnRyaWVzLmluY2x1ZGVzKHRoaXMuZGVmYXVsdENvdW50cnlpc28pXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuc2V0Q291bnRyeSh0aGlzLmdldENvdW50cnlCeUlzb0NvZGUodGhpcy5wcmVmZXJyZWRDb3VudHJpZXNbMF0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldENvdW50cnkodGhpcy5jb3VudHJpZXNbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChcbiAgICAgICAgdGhpcy5jb3VudHJpZXMgJiZcbiAgICAgICAgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUgJiZcbiAgICAgICAgY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlICE9PVxuICAgICAgICBjaGFuZ2VzLmRlZmF1bHlDb3VudHJ5aXNvQ29kZS5wcmV2aW91c1ZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLnNldENvdW50cnkoY2hhbmdlcy5kZWZhdWx5Q291bnRyeWlzb0NvZGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5maWxsVmFsdWVzKG9iaik7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIGZpbGxWYWx1ZXModmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgZ29vZ2xlTnVtYmVyOiBQaG9uZU51bWJlcjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdvb2dsZU51bWJlciA9IHRoaXMucGhvbmVVdGlsLnBhcnNlKHZhbHVlLCBudWxsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICAgIGlmICghZ29vZ2xlTnVtYmVyKSB7XG4gICAgICAgIC8vIElmIGZhaWxlZCB0byBwYXJzZSwgdHJ5IGFkZGluZyBhICsxIGFuZCBzZWUgaWYgdmFsaWRcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+PSAxMCAmJiB2YWx1ZS5pbmRleE9mKCcrJykgPT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgdiA9ICcrMScgKyB2YWx1ZTtcbiAgICAgICAgICBnb29nbGVOdW1iZXIgPSB0aGlzLnBob25lVXRpbC5wYXJzZSh2LCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFnb29nbGVOdW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1dhcm5pbmc6IGZhaWxlZCB0byBwYXJzZSBudW1iZXI6ICcsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChnb29nbGVOdW1iZXIpIHtcbiAgICAgICAgbGV0IGlzb0NvZGUgPSBnb29nbGVOdW1iZXIgJiYgZ29vZ2xlTnVtYmVyLmdldENvdW50cnlDb2RlKClcbiAgICAgICAgICAgID8gdGhpcy5nZXRDb3VudHJ5SXNvQ29kZShnb29nbGVOdW1iZXIuZ2V0Q291bnRyeUNvZGUoKSwgZ29vZ2xlTnVtYmVyKVxuICAgICAgICAgICAgOiB0aGlzLmNvdW50cnkuaXNvQ29kZTtcbiAgICAgICAgaWYgKGlzb0NvZGUgJiYgaXNvQ29kZSAhPT0gdGhpcy5jb3VudHJ5Lmlzb0NvZGUpIHtcbiAgICAgICAgICBjb25zdCBuZXdDb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChcbiAgICAgICAgICAgICAgKGNvdW50cnk6IENvdW50cnlJKSA9PiBjb3VudHJ5Lmlzb0NvZGUgPT09IGlzb0NvZGVcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChuZXdDb3VudHJ5KSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50cnkgPSBuZXdDb3VudHJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpc29Db2RlID0gaXNvQ29kZSA/IGlzb0NvZGUgOiB0aGlzLmNvdW50cnkgPyB0aGlzLmNvdW50cnkuaXNvQ29kZSA6IG51bGw7XG5cbiAgICAgICAgY29uc3QgaW50ZXJuYXRpb25hbGxObyA9IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpO1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRlcm5hdGlvbmFsbE5vKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGludGVybmF0aW9uYWxsTm87XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaGFzVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLmlzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG9uQ29kZU9wZW4oKSB7XG4gICAgdGhpcy5jb2RlT3Blbi5lbWl0KCk7XG4gIH1cblxuICBhc3luYyBvcGVuTW9kYWwoKSB7XG5cbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDdHJsLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IElvbkludFRlbENvZGVDb21wb25lbnQsXG4gICAgICBjc3NDbGFzczogdGhpcy5tb2RhbENzc0NsYXNzLFxuICAgICAgYmFja2Ryb3BEaXNtaXNzOiB0aGlzLm1vZGFsU2hvdWxkQmFja2Ryb3BDbG9zZSxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyeSxcbiAgICAgICAgY2FuU2VhcmNoOiB0aGlzLm1vZGFsQ2FuU2VhcmNoLFxuICAgICAgICBjbG9zZUJ1dHRvblRleHQ6IHRoaXMubW9kYWxDbG9zZVRleHQsXG4gICAgICAgIGNsb3NlQnV0dG9uU2xvdDogdGhpcy5tb2RhbENsb3NlQnV0dG9uU2xvdCxcbiAgICAgICAgY291bnRyaWVzOiB0aGlzLmNvdW50cmllcyxcbiAgICAgICAgdGl0bGU6IHRoaXMubW9kYWxUaXRsZSxcbiAgICAgICAgc2VhcmNoRmFpbFRleHQ6IHRoaXMubW9kYWxTZWFyY2hGYWlsVGV4dCxcbiAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6IHRoaXMubW9kYWxTZWFyY2hQbGFjZWhvbGRlcixcbiAgICAgICAgc2hvdWxkRm9jdXNTZWFyY2hiYXI6IHRoaXMubW9kYWxTaG91bGRGb2N1c1NlYXJjaGJhcixcbiAgICAgICAgZGlhbENvZGU6IHRoaXMuc2VwYXJhdGVEaWFsQ29kZSA/IHRoaXMuZGlhbENvZGVQcmVmaXggOiBudWxsXG4gICAgICB9XG4gICAgfSk7XG4gICAgYXdhaXQgbW9kYWwucHJlc2VudCgpO1xuICAgIG1vZGFsLm9uRGlkRGlzbWlzcygpLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5kYXRhKSB7XG4gICAgICAgIHRoaXMuY291bnRyeSA9IGRhdGEuZGF0YTtcbiAgICAgICAgdGhpcy5vbkNvZGVDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgb25Db2RlQ2hhbmdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnBob25lTnVtYmVyKSkge1xuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBnb29nbGVOdW1iZXI6IFBob25lTnVtYmVyO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZ29vZ2xlTnVtYmVyID0gdGhpcy5waG9uZVV0aWwucGFyc2UoXG4gICAgICAgICAgICB0aGlzLnBob25lTnVtYmVyLFxuICAgICAgICAgICAgdGhpcy5jb3VudHJ5Lmlzb0NvZGUudG9VcHBlckNhc2UoKVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgICAgIGNvbnN0IGludGVybmF0aW9uYWxsTm8gPSBnb29nbGVOdW1iZXJcbiAgICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0LklOVEVSTkFUSU9OQUwpXG4gICAgICAgICAgOiAnJztcbiAgICAgIGNvbnN0IG5hdGlvbmFsTm8gPSBnb29nbGVOdW1iZXJcbiAgICAgICAgICA/IHRoaXMucGhvbmVVdGlsLmZvcm1hdChnb29nbGVOdW1iZXIsIFBob25lTnVtYmVyRm9ybWF0Lk5BVElPTkFMKVxuICAgICAgICAgIDogJyc7XG5cbiAgICAgIGlmICh0aGlzLnNlcGFyYXRlRGlhbENvZGUgJiYgaW50ZXJuYXRpb25hbGxObykge1xuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gdGhpcy5yZW1vdmVEaWFsQ29kZShpbnRlcm5hdGlvbmFsbE5vKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGludGVybmF0aW9uYWxsTm8pO1xuXG4gICAgICB0aGlzLmNvZGVDaGFuZ2UuZW1pdCgpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubnVtYmVySW5wdXRFbC5zZXRGb2N1cygpO1xuICAgIH0sIDQwMCk7XG4gIH1cblxuICBvbkNvZGVDbG9zZSgpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCBmYWxzZSk7XG4gICAgdGhpcy5jb2RlQ2xvc2UuZW1pdCgpO1xuICB9XG5cbiAgb25Db2RlU2VsZWN0KCkge1xuICAgIHRoaXMuY29kZVNlbGVjdC5lbWl0KCk7XG4gIH1cblxuICBvbklvbk51bWJlckNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnNldElvbmljQ2xhc3Nlcyh0aGlzLmVsKTtcbiAgICB0aGlzLm51bWJlckNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIG9uSW9uTnVtYmVyQmx1cigpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuc2V0SW9uaWNDbGFzc2VzKHRoaXMuZWwpO1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNldEl0ZW1DbGFzcyh0aGlzLmVsLCAnaXRlbS1oYXMtZm9jdXMnLCBmYWxzZSk7XG4gICAgdGhpcy5udW1iZXJCbHVyLmVtaXQoKTtcbiAgfVxuXG4gIG9uSW9uTnVtYmVyRm9jdXMoKSB7XG4gICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgdGhpcy5zZXRJdGVtQ2xhc3ModGhpcy5lbCwgJ2l0ZW0taGFzLWZvY3VzJywgdHJ1ZSk7XG4gICAgdGhpcy5udW1iZXJGb2N1cy5lbWl0KCk7XG4gIH1cblxuICBvbklvbk51bWJlcklucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgdGhpcy5udW1iZXJJbnB1dC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIC8vIGNhbGxlZCB2aWEgKG5nTW9kZWxDaGFuZ2UpXG4gIG9uTnVtYmVyQ2hhbmdlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5waG9uZU51bWJlcikge1xuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICB0aGlzLmVtaXRWYWx1ZUNoYW5nZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY291bnRyeSkge1xuICAgICAgdGhpcy5lbWl0VmFsdWVDaGFuZ2UodGhpcy5kaWFsQ29kZVByZWZpeCArIHRoaXMuY291bnRyeS5kaWFsQ29kZSArICcgJyArIHRoaXMucGhvbmVOdW1iZXIpO1xuICAgIH1cbiAgICBsZXQgZ29vZ2xlTnVtYmVyOiBQaG9uZU51bWJlcjtcbiAgICB0cnkge1xuICAgICAgZ29vZ2xlTnVtYmVyID0gdGhpcy5waG9uZVV0aWwucGFyc2UoXG4gICAgICAgICAgdGhpcy5waG9uZU51bWJlcixcbiAgICAgICAgICB0aGlzLmNvdW50cnkuaXNvQ29kZS50b1VwcGVyQ2FzZSgpXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgaXNvQ29kZSA9IHRoaXMuY291bnRyeSA/IHRoaXMuY291bnRyeS5pc29Db2RlIDogbnVsbDtcbiAgICAvLyBhdXRvIHNlbGVjdCBjb3VudHJ5IGJhc2VkIG9uIHRoZSBleHRlbnNpb24gKGFuZCBhcmVhQ29kZSBpZiBuZWVkZWQpIChlLmcgc2VsZWN0IENhbmFkYSBpZiBudW1iZXIgc3RhcnRzIHdpdGggKzEgNDE2KVxuICAgIGlmICh0aGlzLmVuYWJsZUF1dG9Db3VudHJ5U2VsZWN0KSB7XG4gICAgICBpc29Db2RlID1cbiAgICAgICAgICBnb29nbGVOdW1iZXIgJiYgZ29vZ2xlTnVtYmVyLmdldENvdW50cnlDb2RlKClcbiAgICAgICAgICAgICAgPyB0aGlzLmdldENvdW50cnlJc29Db2RlKGdvb2dsZU51bWJlci5nZXRDb3VudHJ5Q29kZSgpLCBnb29nbGVOdW1iZXIpXG4gICAgICAgICAgICAgIDogdGhpcy5jb3VudHJ5Lmlzb0NvZGU7XG4gICAgICBpZiAoaXNvQ29kZSAmJiBpc29Db2RlICE9PSB0aGlzLmNvdW50cnkuaXNvQ29kZSkge1xuICAgICAgICBjb25zdCBuZXdDb3VudHJ5ID0gdGhpcy5jb3VudHJpZXMuZmluZChcbiAgICAgICAgICAgIChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gY291bnRyeS5pc29Db2RlID09PSBpc29Db2RlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChuZXdDb3VudHJ5KSB7XG4gICAgICAgICAgdGhpcy5jb3VudHJ5ID0gbmV3Q291bnRyeTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpc29Db2RlID0gaXNvQ29kZSA/IGlzb0NvZGUgOiB0aGlzLmNvdW50cnkgPyB0aGlzLmNvdW50cnkuaXNvQ29kZSA6IG51bGw7XG5cbiAgICBpZiAoIXRoaXMucGhvbmVOdW1iZXIgfHwgIWlzb0NvZGUpIHtcbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbnRlcm5hdGlvbmFsbE5vID0gZ29vZ2xlTnVtYmVyXG4gICAgICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5JTlRFUk5BVElPTkFMKVxuICAgICAgICAgIDogJyc7XG4gICAgICBjb25zdCBuYXRpb25hbE5vID0gZ29vZ2xlTnVtYmVyXG4gICAgICAgICAgPyB0aGlzLnBob25lVXRpbC5mb3JtYXQoZ29vZ2xlTnVtYmVyLCBQaG9uZU51bWJlckZvcm1hdC5OQVRJT05BTClcbiAgICAgICAgICA6ICcnO1xuXG4gICAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIGludGVybmF0aW9uYWxsTm8pIHtcbiAgICAgICAgdGhpcy5waG9uZU51bWJlciA9IHRoaXMucmVtb3ZlRGlhbENvZGUoaW50ZXJuYXRpb25hbGxObyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZW1pdFZhbHVlQ2hhbmdlKGludGVybmF0aW9uYWxsTm8pO1xuICAgIH1cbiAgfVxuXG4gIG9uTnVtYmVyS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGFsbG93ZWRDaGFycyA9IC9eWzAtOVxcK1xcLVxcIF0vO1xuICAgIGNvbnN0IGFsbG93ZWRDdHJsQ2hhcnMgPSAvW2F4Y3ZdLztcbiAgICBjb25zdCBhbGxvd2VkT3RoZXJLZXlzID0gW1xuICAgICAgJ0Fycm93TGVmdCcsXG4gICAgICAnQXJyb3dVcCcsXG4gICAgICAnQXJyb3dSaWdodCcsXG4gICAgICAnQXJyb3dEb3duJyxcbiAgICAgICdIb21lJyxcbiAgICAgICdFbmQnLFxuICAgICAgJ0luc2VydCcsXG4gICAgICAnRGVsZXRlJyxcbiAgICAgICdCYWNrc3BhY2UnLFxuICAgICAgJ1RhYicsXG4gICAgXTtcbiAgICBjb25zdCBpc0N0cmxLZXkgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXk7XG5cbiAgICBpZiAoXG4gICAgICAgICFhbGxvd2VkQ2hhcnMudGVzdChldmVudC5rZXkpICYmXG4gICAgICAgICEoaXNDdHJsS2V5ICYmIGFsbG93ZWRDdHJsQ2hhcnMudGVzdChldmVudC5rZXkpKSAmJlxuICAgICAgICAhYWxsb3dlZE90aGVyS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpXG4gICAgKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQ291bnRyaWVzKHRleHQ6IHN0cmluZyk6IENvdW50cnlJW10ge1xuICAgIHJldHVybiB0aGlzLmNvdW50cmllcy5maWx0ZXIoKGNvdW50cnkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSAhPT0gLTEgfHxcbiAgICAgICAgICBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpICE9PSAtMSB8fFxuICAgICAgICAgIGNvdW50cnkuZGlhbENvZGUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGV4dCkgIT09IC0xXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudHJ5SXNvQ29kZShcbiAgICAgIGNvdW50cnlDb2RlOiBudW1iZXIsXG4gICAgICBnb29nbGVOdW1iZXI6IFBob25lTnVtYmVyXG4gICk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3QgcmF3TnVtYmVyID0gKGdvb2dsZU51bWJlciBhcyBhbnkpLnZhbHVlc19bMl0udG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IGNvdW50cmllcyA9IHRoaXMuY291bnRyaWVzLmZpbHRlcihcbiAgICAgICAgKGNvdW50cnk6IENvdW50cnlJKSA9PiBjb3VudHJ5LmRpYWxDb2RlID09PSBjb3VudHJ5Q29kZS50b1N0cmluZygpXG4gICAgKTtcbiAgICBjb25zdCBtYWluQ291bnRyeSA9IGNvdW50cmllcy5maW5kKFxuICAgICAgICAoY291bnRyeTogQ291bnRyeUkpID0+IGNvdW50cnkuYXJlYUNvZGVzID09PSB1bmRlZmluZWRcbiAgICApO1xuICAgIGNvbnN0IHNlY29uZGFyeUNvdW50cmllcyA9IGNvdW50cmllcy5maWx0ZXIoXG4gICAgICAgIChjb3VudHJ5OiBDb3VudHJ5SSkgPT4gY291bnRyeS5hcmVhQ29kZXMgIT09IHVuZGVmaW5lZFxuICAgICk7XG5cbiAgICBsZXQgbWF0Y2hlZENvdW50cnkgPSBtYWluQ291bnRyeSA/IG1haW5Db3VudHJ5Lmlzb0NvZGUgOiB1bmRlZmluZWQ7XG5cbiAgICBzZWNvbmRhcnlDb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xuICAgICAgY291bnRyeS5hcmVhQ29kZXMuZm9yRWFjaCgoYXJlYUNvZGUpID0+IHtcbiAgICAgICAgaWYgKHJhd051bWJlci5zdGFydHNXaXRoKGFyZWFDb2RlKSkge1xuICAgICAgICAgIG1hdGNoZWRDb3VudHJ5ID0gY291bnRyeS5pc29Db2RlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbWF0Y2hlZENvdW50cnk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoQWxsQ291bnRyaWVzKCkge1xuICAgIHRoaXMuY291bnRyaWVzID0gdGhpcy5pb25JbnRsVGVsSW5wdXRTZXJ2aWNlLmdldExpc3RPZkNvdW50cmllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3VudHJ5QnlJc29Db2RlKGlzb0NvZGU6IHN0cmluZyk6IENvdW50cnlJIHtcbiAgICBmb3IgKGNvbnN0IGNvdW50cnkgb2YgdGhpcy5jb3VudHJpZXMpIHtcbiAgICAgIGlmIChjb3VudHJ5Lmlzb0NvZGUgPT09IGlzb0NvZGUpIHtcbiAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ3RlbDogdW5rbm93biBjb3VudHJ5IGlzbyBjb2RlOiAnLCBpc29Db2RlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBwcml2YXRlIGlzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEaWFsQ29kZShwaG9uZU51bWJlcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZXBhcmF0ZURpYWxDb2RlICYmIHBob25lTnVtYmVyKSB7XG4gICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cihwaG9uZU51bWJlci5pbmRleE9mKCcgJykgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIHBob25lTnVtYmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb3VudHJ5KGNvdW50cnk6IENvdW50cnlJKTogdm9pZCB7XG4gICAgdGhpcy5jb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLmNvZGVDaGFuZ2UuZW1pdCh0aGlzLmNvdW50cnkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQcmVmZXJyZWRDb3VudHJpZXMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBwcmVmZXJlZENvdW50cnlJc29Db2RlIG9mIHRoaXMucHJlZmVycmVkQ291bnRyaWVzKSB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXRDb3VudHJ5QnlJc29Db2RlKHByZWZlcmVkQ291bnRyeUlzb0NvZGUpO1xuICAgICAgY291bnRyeS5wcmlvcml0eSA9IGNvdW50cnkgPyAxIDogY291bnRyeS5wcmlvcml0eTtcbiAgICB9XG4gICAgdGhpcy5jb3VudHJpZXMuc29ydCgoYSwgYikgPT5cbiAgICAgICAgYS5wcmlvcml0eSA+IGIucHJpb3JpdHkgPyAtMSA6IGEucHJpb3JpdHkgPCBiLnByaW9yaXR5ID8gMSA6IDBcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydHNXaXRoID0gKGlucHV0OiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIGlucHV0LnN1YnN0cigwLCBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbGFzc2VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gY2xhc3NMaXN0Lml0ZW0oaSk7XG4gICAgICBpZiAoaXRlbSAhPT0gbnVsbCAmJiB0aGlzLnN0YXJ0c1dpdGgoaXRlbSwgJ25nLScpKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChgaW9uLSR7aXRlbS5zdWJzdHIoMyl9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc2VzID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIFtcbiAgICAgICdpb24tdmFsaWQnLFxuICAgICAgJ2lvbi1pbnZhbGlkJyxcbiAgICAgICdpb24tdG91Y2hlZCcsXG4gICAgICAnaW9uLXVudG91Y2hlZCcsXG4gICAgICAnaW9uLWRpcnR5JyxcbiAgICAgICdpb24tcHJpc3RpbmUnLFxuICAgIF0uZm9yRWFjaCgoYykgPT4gY2xhc3NMaXN0LnJlbW92ZShjKSk7XG5cbiAgICBjbGFzc2VzLmZvckVhY2goKGMpID0+IGNsYXNzTGlzdC5hZGQoYykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRJb25pY0NsYXNzZXMgPSAoZWxlbWVudDogRWxlbWVudFJlZikgPT4ge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmdldENsYXNzZXMoaW5wdXQpO1xuICAgICAgdGhpcy5zZXRDbGFzc2VzKGlucHV0LCBjbGFzc2VzKTtcblxuICAgICAgY29uc3QgaXRlbSA9IGlucHV0LmNsb3Nlc3QoJ2lvbi1pdGVtJyk7XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLnNldENsYXNzZXMoaXRlbSwgY2xhc3Nlcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldEl0ZW1DbGFzcyA9IChcbiAgICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICBjbGFzc05hbWU6IHN0cmluZyxcbiAgICAgIGFkZENsYXNzOiBib29sZWFuXG4gICkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGl0ZW0gPSBpbnB1dC5jbG9zZXN0KCdpb24taXRlbScpO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBjbGFzc0xpc3QgPSBpdGVtLmNsYXNzTGlzdDtcbiAgICAgIGlmIChhZGRDbGFzcykge1xuICAgICAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI8aW9uLWJ1dHRvblxuICAgICAgICBmaWxsPVwiY2xlYXJcIlxuICAgICAgICBjbGFzcz1cImlvbi1pbnRsLXRlbC1pbnB1dC1idG5cIlxuICAgICAgICBbZGlzYWJsZWRdID0gXCJkaXNhYmxlZFwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJjb3VudHJ5XCJcbiAgICAgICAgKGNsaWNrKT1cIm9wZW5Nb2RhbCgpXCJcbj5cbiAgPHNwYW4gY2xhc3M9XCJpb24taW50bC10ZWwtaW5wdXQtZmxhZyBmaSBmaS17e2NvdW50cnkuZmxhZ0NsYXNzfX1cIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJpb24taW50bC10ZWwtaW5wdXQtY29kZVwiICpuZ0lmPVwic2VwYXJhdGVEaWFsQ29kZVwiPnt7ZGlhbENvZGVQcmVmaXh9fXt7Y291bnRyeS5kaWFsQ29kZX19PC9zcGFuPlxuICA8aW9uLWljb24gc3R5bGU9XCJmb250LXNpemU6MTRweDtvcGFjaXR5Oi41O1wiIG5hbWU9XCJjYXJldC1kb3duXCI+PC9pb24taWNvbj5cbjwvaW9uLWJ1dHRvbj5cbjxkaXYgY2xhc3M9XCJpb24taW50bC10ZWwtaW5wdXQtbnVtYmVyXCI+XG4gIDxpb24taW5wdXRcbiAgICAgICAgICAjbnVtYmVySW5wdXRcbiAgICAgICAgICBbKG5nTW9kZWwpXT1cInBob25lTnVtYmVyXCJcbiAgICAgICAgICBbYXV0b2NvbXBsZXRlXT1cImF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcbiAgICAgICAgICBbZGlzYWJsZWRdID0gXCJkaXNhYmxlZFwiXG4gICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXG4gICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgKGlvbkJsdXIpPVwib25Jb25OdW1iZXJCbHVyKClcIlxuICAgICAgICAgIChpb25DaGFuZ2UpPVwib25Jb25OdW1iZXJDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgKGlvbkZvY3VzKT1cIm9uSW9uTnVtYmVyRm9jdXMoKVwiXG4gICAgICAgICAgKGlvbklucHV0KT1cIm9uSW9uTnVtYmVySW5wdXQoJGV2ZW50KVwiXG4gICAgICAgICAgKGtleWRvd24pPVwib25OdW1iZXJLZXlEb3duKCRldmVudClcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uTnVtYmVyQ2hhbmdlKClcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tjb3VudHJ5IHwgY291bnRyeVBsYWNlaG9sZGVyOiBpbnB1dFBsYWNlaG9sZGVyOnNlcGFyYXRlRGlhbENvZGU6ZmFsbGJhY2tQbGFjZWhvbGRlcjp1c2VQYXR0ZXJuUGxhY2Vob2xkZXJ9fVwiID5cbiAgPC9pb24taW5wdXQ+XG48L2Rpdj5cbiJdfQ==