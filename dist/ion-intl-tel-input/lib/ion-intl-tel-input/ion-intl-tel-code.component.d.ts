import { OnInit } from '@angular/core';
import { IonSearchbar, ModalController } from '@ionic/angular';
import { CountryI } from '../models/country.model';
import * as i0 from "@angular/core";
export declare class IonIntTelCodeComponent implements OnInit {
    private modalCtrl;
    country: CountryI;
    canSearch: boolean;
    closeButtonText: string;
    closeButtonSlot: string;
    countries: CountryI[];
    searchFailText: string;
    searchPlaceholder: string;
    shouldFocusSearchbar: boolean;
    title: string;
    dialCode: string;
    sbar: IonSearchbar;
    private allCountries;
    notFound: any;
    constructor(modalCtrl: ModalController);
    ngOnInit(): void;
    ionViewDidEnter(): void;
    search(ev: any): void;
    itemTapped(c: any): void;
    closeModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonIntTelCodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IonIntTelCodeComponent, "ion-intl-tel-code", never, { "country": "country"; "canSearch": "canSearch"; "closeButtonText": "closeButtonText"; "closeButtonSlot": "closeButtonSlot"; "countries": "countries"; "searchFailText": "searchFailText"; "searchPlaceholder": "searchPlaceholder"; "shouldFocusSearchbar": "shouldFocusSearchbar"; "title": "title"; "dialCode": "dialCode"; }, {}, never, never, false, never>;
}
