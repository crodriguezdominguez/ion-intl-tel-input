import { OnInit, EventEmitter, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IonInput, ModalController, Platform } from '@ionic/angular';
import { CountryI } from '../models/country.model';
import { IonIntlTelInputService } from '../ion-intl-tel-input.service';
import * as i0 from "@angular/core";
/**
 * @ignore
 */
export declare class IonIntlTelInputComponent implements ControlValueAccessor, OnInit, OnChanges {
    private el;
    private platform;
    private ionIntlTelInputService;
    private modalCtrl;
    cssClass: boolean;
    isIos: boolean;
    isMD: boolean;
    hasFocus: any;
    get hasValueCssClass(): boolean;
    get isEnabled(): boolean;
    /**
     * autocomplete, set to 'tel' if needed
     *
     * @default 'off'
     * @memberof IonIntlTelInputComponent
     */
    autocomplete: string;
    /**
     * required, passed onto ion-input so we can be accessiblity compliant
     *
     * @default false
     * @memberof IonIntlTelInputComponent
     */
    required: boolean;
    /**
     * Iso Code of default selected Country.
     * See more on.
     *
     * @default ''
     * @memberof IonIntlTelInputComponent
     */
    defaultCountryiso: string;
    /**
     * Determines whether to use `00` or `+` as dial code prefix.
     * Available attributes are '+' | '00'.
     * See more on.
     *
     * @default +
     * @memberof IonIntlTelInputComponent
     */
    dialCodePrefix: '+' | '00';
    /**
     * Determines whether to select automatic country based on user input.
     * See more on.
     *
     * @default true
     * @memberof IonIntlTelInputComponent
     */
    enableAutoCountrySelect: boolean;
    /**
     * Determines whether an example number will be shown as a placeholder in input.
     * See more on.
     *
     * @default true
     * @memberof IonIntlTelInputComponent
     */
    enablePlaceholder: boolean;
    /**
     * A fallaback placeholder to be used if no example number is found for a country.
     * See more on.
     *
     * @default ''
     * @memberof IonIntlTelInputComponent
     */
    fallbackPlaceholder: string;
    /**
     * If a custom placeholder is needed for input.
     * If this property is set it will override `enablePlaceholder` and only this placeholder will be shown.
     * See more on.
     *
     * @default ''
     * @memberof IonIntlTelInputComponent
     */
    inputPlaceholder: string;
    /**
     * Instead of an example phone number, use a x pattern. Such as xxx-xxx-xxxx, this will be obtained
     * based on the example number from the google phone lib.
     *
     * @default true
     * @memberof IonIntlTelInputComponent
     */
    usePatternPlaceholder: boolean;
    /**
     * Maximum Length for input.
     * See more on.
     *
     * @default '15'
     * @memberof IonIntlTelInputComponent
     */
    maxLength: string;
    /**
     * Title of modal opened to select country dial code.
     * See more on.
     *
     * @default 'Select Country'
     * @memberof IonIntlTelInputComponent
     */
    modalTitle: string;
    /**
     * CSS class to attach to dial code selectionmodal.
     * See more on.
     *
     * @default 'ion-intl-tel-modal'
     * @memberof IonIntlTelInputComponent
     */
    modalCssClass: string;
    /**
     * Placeholder for input in dial code selection modal.
     * See more on.
     *
     * @default 'Enter country name'
     * @memberof IonIntlTelInputComponent
     */
    modalSearchPlaceholder: string;
    /**
     * Text for close button in dial code selection modal.
     * See more on.
     *
     * @default 'Close'
     * @memberof IonIntlTelInputComponent
     */
    modalCloseText: string;
    /**
     * Slot for close button in dial code selection modal. [Ionic slots](https://ionicframework.com/docs/api/item) are supported
     * See more on.
     *
     * @default 'end'
     * @memberof IonIntlTelInputComponent
     */
    modalCloseButtonSlot: 'start' | 'end' | 'primary' | 'secondary';
    /**
     * Determines whether dial code selection modal should be searchable or not.
     * See more on.
     *
     * @default 'true'
     * @memberof IonIntlTelInputComponent
     */
    modalCanSearch: boolean;
    /**
     * Determines whether dial code selection modal is closed on backdrop click.
     * See more on.
     *
     * @default 'true'
     * @memberof IonIntlTelInputComponent
     */
    modalShouldBackdropClose: boolean;
    /**
     * Determines whether input should be focused when dial code selection modal is opened.
     * See more on.
     *
     * @default 'true'
     * @memberof IonIntlTelInputComponent
     */
    modalShouldFocusSearchbar: boolean;
    /**
     * Message to show when no countries are found for search in dial code selection modal.
     * See more on.
     *
     * @default 'true'
     * @memberof IonIntlTelInputComponent
     */
    modalSearchFailText: string;
    /**
     * List of iso codes of manually selected countries as string, which will appear in the dropdown.
     * **Note**: `onlyCountries` should be a string array of country iso codes.
     * See more on.
     *
     * @default null
     * @memberof IonIntlTelInputComponent
     */
    onlyCountries: Array<string>;
    /**
     * List of iso codesn as string of  countries, which will appear at the top in dial code selection modal.
     * **Note**: `preferredCountries` should be a string array of country iso codes.
     * See more on.
     *
     * @default null
     * @memberof IonIntlTelInputComponent
     */
    preferredCountries: Array<string>;
    /**
     * Determines whether first country should be selected in dial code select or not.
     * See more on.
     *
     * @default true
     * @memberof IonIntlTelInputComponent
     */
    selectFirstCountry: boolean;
    /**
     * Determines whether to visually separate dialcode into the drop down element.
     * See more on.
     *
     * @default true
     * @memberof IonIntlTelInputComponent
     */
    separateDialCode: boolean;
    /**
     * Fires when the Phone number Input is changed.
     * See more on.
     *
     * @memberof IonIntlTelInputComponent
     */
    readonly numberChange: EventEmitter<Event>;
    /**
     * Fires when the Phone number Input is blurred.
     * See more on.
     *
     * @memberof IonIntlTelInputComponent
     */
    readonly numberBlur: EventEmitter<void>;
    /**
     * Fires when the Phone number Input is focused.
     * See more on.
     *
     * @memberof IonIntlTelInputComponent
     */
    readonly numberFocus: EventEmitter<void>;
    /**
     * Fires when the user is typing in Phone number Input.
     * See more on.
     *
     * @memberof IonIntlTelInputComponent
     */
    readonly numberInput: EventEmitter<KeyboardEvent>;
    /**
     * Fires when the dial code selection is changed.
     * See more on.
     *
     * @memberof IonIntlTelInputComponent
     */
    readonly codeChange: EventEmitter<any>;
    /**
     * Fires when the dial code selection modal is opened.
     * See more on.
     *
     * @memberof IonIntlTelInputComponent
     */
    readonly codeOpen: EventEmitter<any>;
    /**
     * Fires when the dial code selection modal is closed.
     * See more on.
     *
     * @memberof IonIntlTelInputComponent
     */
    readonly codeClose: EventEmitter<any>;
    /**
     * Fires when a dial code is selected in dial code selection modal.
     * See more on.
     *
     * @memberof IonIntlTelInputComponent
     */
    readonly codeSelect: EventEmitter<any>;
    numberInputEl: IonInput;
    private _value;
    country: CountryI;
    phoneNumber: string;
    countries: CountryI[];
    disabled: boolean;
    phoneUtil: any;
    onTouched: () => void;
    propagateChange: (_: string | null) => void;
    constructor(el: ElementRef, platform: Platform, ionIntlTelInputService: IonIntlTelInputService, modalCtrl: ModalController);
    get value(): string | null;
    set value(value: string | null);
    emitValueChange(change: string | null): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(obj: string): void;
    setDisabledState(isDisabled: boolean): void;
    fillValues(value: string): void;
    hasValue(): boolean;
    onCodeOpen(): void;
    openModal(): Promise<void>;
    onCodeChange(): void;
    onCodeClose(): void;
    onCodeSelect(): void;
    onIonNumberChange(event: Event): void;
    onIonNumberBlur(): void;
    onIonNumberFocus(): void;
    onIonNumberInput(event: KeyboardEvent): void;
    onNumberChange(): void;
    onNumberKeyDown(event: KeyboardEvent): void;
    private filterCountries;
    private getCountryIsoCode;
    private fetchAllCountries;
    private getCountryByIsoCode;
    private isNullOrWhiteSpace;
    private removeDialCode;
    private setCountry;
    private setPreferredCountries;
    private startsWith;
    private getClasses;
    private setClasses;
    private setIonicClasses;
    private setItemClass;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonIntlTelInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IonIntlTelInputComponent, "ion-intl-tel-input", never, { "isEnabled": "isEnabled"; "autocomplete": "autocomplete"; "required": "required"; "defaultCountryiso": "defaultCountryiso"; "dialCodePrefix": "dialCodePrefix"; "enableAutoCountrySelect": "enableAutoCountrySelect"; "enablePlaceholder": "enablePlaceholder"; "fallbackPlaceholder": "fallbackPlaceholder"; "inputPlaceholder": "inputPlaceholder"; "usePatternPlaceholder": "usePatternPlaceholder"; "maxLength": "maxLength"; "modalTitle": "modalTitle"; "modalCssClass": "modalCssClass"; "modalSearchPlaceholder": "modalSearchPlaceholder"; "modalCloseText": "modalCloseText"; "modalCloseButtonSlot": "modalCloseButtonSlot"; "modalCanSearch": "modalCanSearch"; "modalShouldBackdropClose": "modalShouldBackdropClose"; "modalShouldFocusSearchbar": "modalShouldFocusSearchbar"; "modalSearchFailText": "modalSearchFailText"; "onlyCountries": "onlyCountries"; "preferredCountries": "preferredCountries"; "selectFirstCountry": "selectFirstCountry"; "separateDialCode": "separateDialCode"; }, { "numberChange": "numberChange"; "numberBlur": "numberBlur"; "numberFocus": "numberFocus"; "numberInput": "numberInput"; "codeChange": "codeChange"; "codeOpen": "codeOpen"; "codeClose": "codeClose"; "codeSelect": "codeSelect"; }, never, never, false, never>;
}
