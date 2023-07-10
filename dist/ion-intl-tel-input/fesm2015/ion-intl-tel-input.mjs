import * as i0 from '@angular/core';
import { Directive, Component, Input, ViewChild, Injectable, Pipe, EventEmitter, forwardRef, HostBinding, Output, NgModule } from '@angular/core';
import * as i4 from '@angular/forms';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import { __awaiter } from 'tslib';
import * as i1 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class IonIntlTelInputValidators {
    static phone(control) {
        const error = { phone: true };
        let phoneNumber;
        if (typeof control.value === 'string') {
            try {
                phoneNumber = PhoneNumberUtil.getInstance().parse(control.value, null);
                if (PhoneNumberUtil.getInstance().isValidNumber(phoneNumber)) {
                    return null;
                }
            }
            catch (e) {
                phoneNumber = null;
            }
            if (!phoneNumber) {
                try {
                    // If failed to parse, try adding a +1 and see if valid
                    if (control.value.length >= 10 && control.value.indexOf('+') === -1) {
                        const v = '+1' + control.value;
                        phoneNumber = PhoneNumberUtil.getInstance().parse(v, null);
                        if (PhoneNumberUtil.getInstance().isValidNumber(phoneNumber)) {
                            return null;
                        }
                    }
                }
                catch (e) {
                    return error;
                }
            }
        }
        if (!control.value) {
            return null; // allow empty to be valid as the required validator can be added if needed
        }
        return error;
    }
}
class IonIntlTelInputValidatorDirective {
    validate(control) {
        return IonIntlTelInputValidators.phone(control);
    }
}
/** @nocollapse */ IonIntlTelInputValidatorDirective.ɵfac = function IonIntlTelInputValidatorDirective_Factory(t) { return new (t || IonIntlTelInputValidatorDirective)(); };
/** @nocollapse */ IonIntlTelInputValidatorDirective.ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: IonIntlTelInputValidatorDirective, selectors: [["", "ionIntlTelInputValid", ""]], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALIDATORS,
                useExisting: IonIntlTelInputValidatorDirective,
                multi: true,
            },
        ])] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonIntlTelInputValidatorDirective, [{
            type: Directive,
            args: [{
                    // tslint:disable-next-line: directive-selector
                    selector: '[ionIntlTelInputValid]',
                    providers: [
                        {
                            provide: NG_VALIDATORS,
                            useExisting: IonIntlTelInputValidatorDirective,
                            multi: true,
                        },
                    ],
                }]
        }], null, null);
})();

const raf = (h) => {
    if (typeof __zone_symbol__requestAnimationFrame === 'function') {
        return __zone_symbol__requestAnimationFrame(h);
    }
    if (typeof requestAnimationFrame === 'function') {
        return requestAnimationFrame(h);
    }
    return setTimeout(h);
};

const _c0$1 = ["searchBar"];
function IonIntTelCodeComponent_ion_searchbar_7_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "ion-searchbar", 7, 8);
        i0.ɵɵlistener("keyup.enter", function IonIntTelCodeComponent_ion_searchbar_7_Template_ion_searchbar_keyup_enter_0_listener($event) { return $event.target.blur(); })("ionChange", function IonIntTelCodeComponent_ion_searchbar_7_Template_ion_searchbar_ionChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.search($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.searchPlaceholder);
        i0.ɵɵproperty("debounce", 400);
    }
}
function IonIntTelCodeComponent_ion_item_11_span_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const c_r7 = i0.ɵɵnextContext().$implicit;
        const ctx_r8 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate2("", ctx_r8.dialCode, "", c_r7.displayDialCode, "");
    }
}
function IonIntTelCodeComponent_ion_item_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "ion-item", 9)(1, "ion-radio", 10);
        i0.ɵɵlistener("click", function IonIntTelCodeComponent_ion_item_11_Template_ion_radio_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r11); const c_r7 = restoredCtx.$implicit; const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.itemTapped(c_r7)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ion-label");
        i0.ɵɵtext(3);
        i0.ɵɵtemplate(4, IonIntTelCodeComponent_ion_item_11_span_4_Template, 2, 2, "span", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "span", 12);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const c_r7 = ctx.$implicit;
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", c_r7.isoCode);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", c_r7.name, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r1.dialCode);
        i0.ɵɵadvance(1);
        i0.ɵɵclassMapInterpolate1("fi fi-", c_r7.flagClass, "");
    }
}
function IonIntTelCodeComponent_ion_item_12_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "ion-item", 13)(1, "ion-text");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx_r2.searchFailText);
    }
}
class IonIntTelCodeComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.closeButtonText = 'Close';
        this.closeButtonSlot = 'end';
    }
    ngOnInit() {
        this.allCountries = this.countries;
    }
    ionViewDidEnter() {
        if (this.sbar && this.shouldFocusSearchbar) {
            setTimeout(() => { this.sbar.setFocus(); }, 400);
        }
    }
    search(ev) {
        let search = ev.detail.value;
        this.notFound = false;
        if (search === '' || search === null) {
            this.countries = this.allCountries;
        }
        else {
            search = search.toLocaleLowerCase();
            this.countries = this.allCountries.filter(r => {
                return (r.name && r.name.toLocaleLowerCase().indexOf(search) !== -1);
            });
            if (this.countries.length === 0) {
                this.notFound = true;
            }
        }
    }
    itemTapped(c) {
        this.modalCtrl.dismiss(c);
    }
    closeModal() {
        this.modalCtrl.dismiss(null);
    }
}
/** @nocollapse */ IonIntTelCodeComponent.ɵfac = function IonIntTelCodeComponent_Factory(t) { return new (t || IonIntTelCodeComponent)(i0.ɵɵdirectiveInject(i1.ModalController)); };
/** @nocollapse */ IonIntTelCodeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: IonIntTelCodeComponent, selectors: [["ion-intl-tel-code"]], viewQuery: function IonIntTelCodeComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$1, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sbar = _t.first);
        }
    }, inputs: { country: "country", canSearch: "canSearch", closeButtonText: "closeButtonText", closeButtonSlot: "closeButtonSlot", countries: "countries", searchFailText: "searchFailText", searchPlaceholder: "searchPlaceholder", shouldFocusSearchbar: "shouldFocusSearchbar", title: "title", dialCode: "dialCode" }, decls: 13, vars: 7, consts: [[1, "ion-text-center"], [3, "slot"], ["ion-button", "", 3, "click"], [3, "placeholder", "debounce", "keyup.enter", "ionChange", 4, "ngIf"], [3, "value"], ["style", "white-space:normal", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], [3, "placeholder", "debounce", "keyup.enter", "ionChange"], ["searchBar", ""], [2, "white-space", "normal"], ["slot", "start", "color", "primary", 3, "value", "click"], [4, "ngIf"], ["slot", "end"], ["lines", "none"]], template: function IonIntTelCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title", 0);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "ion-buttons", 1)(5, "ion-button", 2);
            i0.ɵɵlistener("click", function IonIntTelCodeComponent_Template_ion_button_click_5_listener() { return ctx.closeModal(); });
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(7, IonIntTelCodeComponent_ion_searchbar_7_Template, 2, 2, "ion-searchbar", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "ion-content")(9, "ion-list")(10, "ion-radio-group", 4);
            i0.ɵɵtemplate(11, IonIntTelCodeComponent_ion_item_11_Template, 6, 6, "ion-item", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, IonIntTelCodeComponent_ion_item_12_Template, 3, 1, "ion-item", 6);
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("slot", ctx.closeButtonSlot);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.closeButtonText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.canSearch);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.country.isoCode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.countries);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.notFound);
        }
    }, dependencies: [i2.NgForOf, i2.NgIf, i1.IonButton, i1.IonButtons, i1.IonContent, i1.IonHeader, i1.IonItem, i1.IonLabel, i1.IonList, i1.IonRadio, i1.IonRadioGroup, i1.IonSearchbar, i1.IonText, i1.IonTitle, i1.IonToolbar, i1.RadioValueAccessor, i1.SelectValueAccessor, i1.TextValueAccessor], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonIntTelCodeComponent, [{
            type: Component,
            args: [{ selector: 'ion-intl-tel-code', template: "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      {{title}}\n    </ion-title>\n\n    <ion-buttons [slot]=\"closeButtonSlot\">\n      <ion-button ion-button (click)=\"closeModal()\">{{closeButtonText}}</ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n  <ion-searchbar #searchBar *ngIf=\"canSearch\" placeholder=\"{{searchPlaceholder}}\" [debounce]=\"400\"\n                 (keyup.enter)=\"$event.target.blur()\" (ionChange)=\"search($event)\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group [value]=\"country.isoCode\">\n      <ion-item style=\"white-space:normal\" *ngFor=\"let c of countries\">\n        <ion-radio [value]=\"c.isoCode\" slot=\"start\" color=\"primary\" (click)=\"itemTapped(c)\"></ion-radio>\n        <ion-label>{{c.name}} <span *ngIf=\"dialCode\">{{dialCode}}{{c.displayDialCode}}</span></ion-label>\n        <span slot=\"end\" class=\"fi fi-{{c.flagClass}}\"></span>\n      </ion-item>\n    </ion-radio-group>\n    <ion-item lines=\"none\" *ngIf=\"notFound\">\n      <ion-text>{{searchFailText}}</ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>\n" }]
        }], function () { return [{ type: i1.ModalController }]; }, { country: [{
                type: Input
            }], canSearch: [{
                type: Input
            }], closeButtonText: [{
                type: Input
            }], closeButtonSlot: [{
                type: Input
            }], countries: [{
                type: Input
            }], searchFailText: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], shouldFocusSearchbar: [{
                type: Input
            }], title: [{
                type: Input
            }], dialCode: [{
                type: Input
            }], sbar: [{
                type: ViewChild,
                args: ['searchBar']
            }] });
})();

const countries = [
    {
        name: 'Afghanistan',
        isoCode: 'af',
        dialCode: '93',
        flagClass: 'af',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Albania',
        isoCode: 'al',
        dialCode: '355',
        flagClass: 'al',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Algeria',
        isoCode: 'dz',
        dialCode: '213',
        flagClass: 'dz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'AmericanSamoa',
        isoCode: 'as',
        dialCode: '1 684',
        flagClass: 'as',
        priority: 0,
        areaCodes: [
            '684'
        ],
        placeholder: ''
    },
    {
        name: 'Andorra',
        isoCode: 'ad',
        dialCode: '376',
        flagClass: 'ad',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Angola',
        isoCode: 'ao',
        dialCode: '244',
        flagClass: 'ao',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Anguilla',
        isoCode: 'ai',
        dialCode: '1 264',
        flagClass: 'ai',
        priority: 0,
        areaCodes: [
            '264'
        ],
        placeholder: ''
    },
    {
        name: 'Antigua and Barbuda',
        isoCode: 'ag',
        dialCode: '1 268',
        flagClass: 'ag',
        priority: 0,
        areaCodes: [
            '268'
        ],
        placeholder: ''
    },
    {
        name: 'Argentina',
        isoCode: 'ar',
        dialCode: '54',
        flagClass: 'ar',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Armenia',
        isoCode: 'am',
        dialCode: '374',
        flagClass: 'am',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Aruba',
        isoCode: 'aw',
        dialCode: '297',
        flagClass: 'aw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Australia',
        isoCode: 'au',
        dialCode: '61',
        flagClass: 'au',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Austria',
        isoCode: 'at',
        dialCode: '43',
        flagClass: 'at',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Azerbaijan',
        isoCode: 'az',
        dialCode: '994',
        flagClass: 'az',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bahamas',
        isoCode: 'bs',
        dialCode: '1 242',
        flagClass: 'bs',
        priority: 0,
        areaCodes: [
            '242'
        ],
        placeholder: ''
    },
    {
        name: 'Bahrain',
        isoCode: 'bh',
        dialCode: '973',
        flagClass: 'bh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bangladesh',
        isoCode: 'bd',
        dialCode: '880',
        flagClass: 'bd',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Barbados',
        isoCode: 'bb',
        dialCode: '1 246',
        flagClass: 'bb',
        priority: 0,
        areaCodes: [
            '246'
        ],
        placeholder: ''
    },
    {
        name: 'Belarus',
        isoCode: 'by',
        dialCode: '375',
        flagClass: 'by',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Belgium',
        isoCode: 'be',
        dialCode: '32',
        flagClass: 'be',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Belize',
        isoCode: 'bz',
        dialCode: '501',
        flagClass: 'bz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Benin',
        isoCode: 'bj',
        dialCode: '229',
        flagClass: 'bj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bermuda',
        isoCode: 'bm',
        dialCode: '1 441',
        flagClass: 'bm',
        priority: 0,
        areaCodes: [
            '441'
        ],
        placeholder: ''
    },
    {
        name: 'Bhutan',
        isoCode: 'bt',
        dialCode: '975',
        flagClass: 'bt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bolivia, Plurinational State of',
        isoCode: 'bo',
        dialCode: '591',
        flagClass: 'bo',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bosnia and Herzegovina',
        isoCode: 'ba',
        dialCode: '387',
        flagClass: 'ba',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Botswana',
        isoCode: 'bw',
        dialCode: '267',
        flagClass: 'bw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Brazil',
        isoCode: 'br',
        dialCode: '55',
        flagClass: 'br',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'British Indian Ocean Territory',
        isoCode: 'io',
        dialCode: '246',
        flagClass: 'io',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Virgin Islands, British',
        isoCode: 'vg',
        dialCode: '1 284',
        flagClass: 'vg',
        priority: 0,
        areaCodes: [
            '284'
        ],
        placeholder: ''
    },
    {
        name: 'Brunei Darussalam',
        isoCode: 'bn',
        dialCode: '673',
        flagClass: 'bn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Bulgaria',
        isoCode: 'bg',
        dialCode: '359',
        flagClass: 'bg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Burkina Faso',
        isoCode: 'bf',
        dialCode: '226',
        flagClass: 'bf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Burundi',
        isoCode: 'bi',
        dialCode: '257',
        flagClass: 'bi',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cambodia',
        isoCode: 'kh',
        dialCode: '855',
        flagClass: 'kh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cameroon',
        isoCode: 'cm',
        dialCode: '237',
        flagClass: 'cm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Canada',
        isoCode: 'ca',
        dialCode: '1',
        flagClass: 'ca',
        priority: 0,
        areaCodes: [
            '204',
            '226',
            '236',
            '249',
            '250',
            '289',
            '306',
            '343',
            '365',
            '387',
            '403',
            '416',
            '418',
            '431',
            '437',
            '438',
            '450',
            '506',
            '514',
            '519',
            '548',
            '579',
            '581',
            '587',
            '604',
            '613',
            '639',
            '647',
            '672',
            '705',
            '709',
            '742',
            '778',
            '780',
            '782',
            '807',
            '819',
            '825',
            '867',
            '873',
            '902',
            '905'
        ],
        placeholder: ''
    },
    {
        name: 'Cape Verde',
        isoCode: 'cv',
        dialCode: '238',
        flagClass: 'cv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cayman Islands',
        isoCode: 'ky',
        dialCode: ' 345',
        flagClass: 'ky',
        priority: 0,
        areaCodes: [
            '345'
        ],
        placeholder: ''
    },
    {
        name: 'Central African Republic',
        isoCode: 'cf',
        dialCode: '236',
        flagClass: 'cf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Chad',
        isoCode: 'td',
        dialCode: '235',
        flagClass: 'td',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Chile',
        isoCode: 'cl',
        dialCode: '56',
        flagClass: 'cl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'China',
        isoCode: 'cn',
        dialCode: '86',
        flagClass: 'cn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Christmas Island',
        isoCode: 'cx',
        dialCode: '61',
        flagClass: 'cx',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cocos (Keeling) Islands',
        isoCode: 'cc',
        dialCode: '61',
        flagClass: 'cc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Colombia',
        isoCode: 'co',
        dialCode: '57',
        flagClass: 'co',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Comoros',
        isoCode: 'km',
        dialCode: '269',
        flagClass: 'km',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Congo, The Democratic Republic of the Congo',
        isoCode: 'cd',
        dialCode: '243',
        flagClass: 'cd',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Congo',
        isoCode: 'cg',
        dialCode: '242',
        flagClass: 'cg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cook Islands',
        isoCode: 'ck',
        dialCode: '682',
        flagClass: 'ck',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Costa Rica',
        isoCode: 'cr',
        dialCode: '506',
        flagClass: 'cr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cote d\'Ivoire',
        isoCode: 'ci',
        dialCode: '225',
        flagClass: 'ci',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Croatia',
        isoCode: 'hr',
        dialCode: '385',
        flagClass: 'hr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cuba',
        isoCode: 'cu',
        dialCode: '53',
        flagClass: 'cu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Cyprus',
        isoCode: 'cy',
        dialCode: '357',
        flagClass: 'cy',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Czech Republic',
        isoCode: 'cz',
        dialCode: '420',
        flagClass: 'cz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Denmark',
        isoCode: 'dk',
        dialCode: '45',
        flagClass: 'dk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Djibouti',
        isoCode: 'dj',
        dialCode: '253',
        flagClass: 'dj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Dominica',
        isoCode: 'dm',
        dialCode: '1 767',
        flagClass: 'dm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Dominican Republic',
        isoCode: 'do',
        dialCode: '1 849',
        flagClass: 'do',
        priority: 0,
        areaCodes: [
            '809',
            '829',
            '849'
        ],
        placeholder: ''
    },
    {
        name: 'Ecuador',
        isoCode: 'ec',
        dialCode: '593',
        flagClass: 'ec',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Egypt',
        isoCode: 'eg',
        dialCode: '20',
        flagClass: 'eg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'El Salvador',
        isoCode: 'sv',
        dialCode: '503',
        flagClass: 'sv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Equatorial Guinea',
        isoCode: 'gq',
        dialCode: '240',
        flagClass: 'gq',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Eritrea',
        isoCode: 'er',
        dialCode: '291',
        flagClass: 'er',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Estonia',
        isoCode: 'ee',
        dialCode: '372',
        flagClass: 'ee',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Ethiopia',
        isoCode: 'et',
        dialCode: '251',
        flagClass: 'et',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Falkland Islands (Malvinas)',
        isoCode: 'fk',
        dialCode: '500',
        flagClass: 'fk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Faroe Islands',
        isoCode: 'fo',
        dialCode: '298',
        flagClass: 'fo',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Fiji',
        isoCode: 'fj',
        dialCode: '679',
        flagClass: 'fj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Finland',
        isoCode: 'fi',
        dialCode: '358',
        flagClass: 'fi',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'France',
        isoCode: 'fr',
        dialCode: '33',
        flagClass: 'fr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'French Guiana',
        isoCode: 'gf',
        dialCode: '594',
        flagClass: 'gf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'French Polynesia',
        isoCode: 'pf',
        dialCode: '689',
        flagClass: 'pf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Gabon',
        isoCode: 'ga',
        dialCode: '241',
        flagClass: 'ga',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Gambia',
        isoCode: 'gm',
        dialCode: '220',
        flagClass: 'gm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Georgia',
        isoCode: 'ge',
        dialCode: '995',
        flagClass: 'ge',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Germany',
        isoCode: 'de',
        dialCode: '49',
        flagClass: 'de',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Ghana',
        isoCode: 'gh',
        dialCode: '233',
        flagClass: 'gh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Gibraltar',
        isoCode: 'gi',
        dialCode: '350',
        flagClass: 'gi',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Greece',
        isoCode: 'gr',
        dialCode: '30',
        flagClass: 'gr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Greenland',
        isoCode: 'gl',
        dialCode: '299',
        flagClass: 'gl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Grenada',
        isoCode: 'gd',
        dialCode: '1 473',
        flagClass: 'gd',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guadeloupe',
        isoCode: 'gp',
        dialCode: '590',
        flagClass: 'gp',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guam',
        isoCode: 'gu',
        dialCode: '1 671',
        flagClass: 'gu',
        priority: 0,
        areaCodes: [
            '671'
        ],
        placeholder: ''
    },
    {
        name: 'Guatemala',
        isoCode: 'gt',
        dialCode: '502',
        flagClass: 'gt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guernsey',
        isoCode: 'gg',
        dialCode: '44',
        flagClass: 'gg',
        priority: 0,
        areaCodes: [
            '1481'
        ],
        placeholder: ''
    },
    {
        name: 'Guinea',
        isoCode: 'gn',
        dialCode: '224',
        flagClass: 'gn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guinea-Bissau',
        isoCode: 'gw',
        dialCode: '245',
        flagClass: 'gw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Guyana',
        isoCode: 'gy',
        dialCode: '595',
        flagClass: 'gy',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Haiti',
        isoCode: 'ht',
        dialCode: '509',
        flagClass: 'ht',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Honduras',
        isoCode: 'hn',
        dialCode: '504',
        flagClass: 'hn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Hong Kong',
        isoCode: 'hk',
        dialCode: '852',
        flagClass: 'hk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Hungary',
        isoCode: 'hu',
        dialCode: '36',
        flagClass: 'hu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Iceland',
        isoCode: 'is',
        dialCode: '354',
        flagClass: 'is',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'India',
        isoCode: 'in',
        dialCode: '91',
        flagClass: 'in',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Indonesia',
        isoCode: 'id',
        dialCode: '62',
        flagClass: 'id',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Iran, Islamic Republic of Persian Gulf',
        isoCode: 'ir',
        dialCode: '98',
        flagClass: 'ir',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Iraq',
        isoCode: 'iq',
        dialCode: '964',
        flagClass: 'iq',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Ireland',
        isoCode: 'ie',
        dialCode: '353',
        flagClass: 'ie',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Isle of Man',
        isoCode: 'im',
        dialCode: '44',
        flagClass: 'im',
        priority: 0,
        areaCodes: [
            '1624'
        ],
        placeholder: ''
    },
    {
        name: 'Israel',
        isoCode: 'il',
        dialCode: '972',
        flagClass: 'il',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Italy',
        isoCode: 'it',
        dialCode: '39',
        flagClass: 'it',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Jamaica',
        isoCode: 'jm',
        dialCode: '1 876',
        flagClass: 'jm',
        priority: 0,
        areaCodes: [
            '876'
        ],
        placeholder: ''
    },
    {
        name: 'Japan',
        isoCode: 'jp',
        dialCode: '81',
        flagClass: 'jp',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Jersey',
        isoCode: 'je',
        dialCode: '44',
        flagClass: 'je',
        priority: 0,
        areaCodes: [
            '1534'
        ],
        placeholder: ''
    },
    {
        name: 'Jordan',
        isoCode: 'jo',
        dialCode: '962',
        flagClass: 'jo',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kazakhstan',
        isoCode: 'kz',
        dialCode: '7 7',
        flagClass: 'kz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kenya',
        isoCode: 'ke',
        dialCode: '254',
        flagClass: 'ke',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kiribati',
        isoCode: 'ki',
        dialCode: '686',
        flagClass: 'ki',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kuwait',
        isoCode: 'kw',
        dialCode: '965',
        flagClass: 'kw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Kyrgyzstan',
        isoCode: 'kg',
        dialCode: '996',
        flagClass: 'kg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Laos',
        isoCode: 'la',
        dialCode: '856',
        flagClass: 'la',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Latvia',
        isoCode: 'lv',
        dialCode: '371',
        flagClass: 'lv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Lebanon',
        isoCode: 'lb',
        dialCode: '961',
        flagClass: 'lb',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Lesotho',
        isoCode: 'ls',
        dialCode: '266',
        flagClass: 'ls',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Liberia',
        isoCode: 'lr',
        dialCode: '231',
        flagClass: 'lr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Libyan Arab Jamahiriya',
        isoCode: 'ly',
        dialCode: '218',
        flagClass: 'ly',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Liechtenstein',
        isoCode: 'li',
        dialCode: '423',
        flagClass: 'li',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Lithuania',
        isoCode: 'lt',
        dialCode: '370',
        flagClass: 'lt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Luxembourg',
        isoCode: 'lu',
        dialCode: '352',
        flagClass: 'lu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Macao',
        isoCode: 'mo',
        dialCode: '853',
        flagClass: 'mo',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Macedonia',
        isoCode: 'mk',
        dialCode: '389',
        flagClass: 'mk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Madagascar',
        isoCode: 'mg',
        dialCode: '261',
        flagClass: 'mg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Malawi',
        isoCode: 'mw',
        dialCode: '265',
        flagClass: 'mw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Malaysia',
        isoCode: 'my',
        dialCode: '60',
        flagClass: 'my',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Maldives',
        isoCode: 'mv',
        dialCode: '960',
        flagClass: 'mv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mali',
        isoCode: 'ml',
        dialCode: '223',
        flagClass: 'ml',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Malta',
        isoCode: 'mt',
        dialCode: '356',
        flagClass: 'mt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Marshall Islands',
        isoCode: 'mh',
        dialCode: '692',
        flagClass: 'mh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Martinique',
        isoCode: 'mq',
        dialCode: '596',
        flagClass: 'mq',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mauritania',
        isoCode: 'mr',
        dialCode: '222',
        flagClass: 'mr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mauritius',
        isoCode: 'mu',
        dialCode: '230',
        flagClass: 'mu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mayotte',
        isoCode: 'yt',
        dialCode: '262',
        flagClass: 'yt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mexico',
        isoCode: 'mx',
        dialCode: '52',
        flagClass: 'mx',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Micronesia, Federated States of Micronesia',
        isoCode: 'fm',
        dialCode: '691',
        flagClass: 'fm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Moldova',
        isoCode: 'md',
        dialCode: '373',
        flagClass: 'md',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Monaco',
        isoCode: 'mc',
        dialCode: '377',
        flagClass: 'mc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mongolia',
        isoCode: 'mn',
        dialCode: '976',
        flagClass: 'mn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Montenegro',
        isoCode: 'me',
        dialCode: '382',
        flagClass: 'me',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Montserrat',
        isoCode: 'ms',
        dialCode: '1664',
        flagClass: 'ms',
        priority: 0,
        areaCodes: [
            '664'
        ],
        placeholder: ''
    },
    {
        name: 'Morocco',
        isoCode: 'ma',
        dialCode: '212',
        flagClass: 'ma',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Mozambique',
        isoCode: 'mz',
        dialCode: '258',
        flagClass: 'mz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Myanmar',
        isoCode: 'mm',
        dialCode: '95',
        flagClass: 'mm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Namibia',
        isoCode: 'na',
        dialCode: '264',
        flagClass: 'na',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Nauru',
        isoCode: 'nr',
        dialCode: '674',
        flagClass: 'nr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Nepal',
        isoCode: 'np',
        dialCode: '977',
        flagClass: 'np',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Netherlands',
        isoCode: 'nl',
        dialCode: '31',
        flagClass: 'nl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'New Caledonia',
        isoCode: 'nc',
        dialCode: '687',
        flagClass: 'nc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'New Zealand',
        isoCode: 'nz',
        dialCode: '64',
        flagClass: 'nz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Nicaragua',
        isoCode: 'ni',
        dialCode: '505',
        flagClass: 'ni',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Niger',
        isoCode: 'ne',
        dialCode: '227',
        flagClass: 'ne',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Nigeria',
        isoCode: 'ng',
        dialCode: '234',
        flagClass: 'ng',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Niue',
        isoCode: 'nu',
        dialCode: '683',
        flagClass: 'nu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Norfolk Island',
        isoCode: 'nf',
        dialCode: '672',
        flagClass: 'nf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Korea, Democratic People\'s Republic of Korea',
        isoCode: 'kp',
        dialCode: '850',
        flagClass: 'kp',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Northern Mariana Islands',
        isoCode: 'mp',
        dialCode: '1 670',
        flagClass: 'mp',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Norway',
        isoCode: 'no',
        dialCode: '47',
        flagClass: 'no',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Oman',
        isoCode: 'om',
        dialCode: '968',
        flagClass: 'om',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Pakistan',
        isoCode: 'pk',
        dialCode: '92',
        flagClass: 'pk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Palau',
        isoCode: 'pw',
        dialCode: '680',
        flagClass: 'pw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Palestinian Territory, Occupied',
        isoCode: 'ps',
        dialCode: '970',
        flagClass: 'ps',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Panama',
        isoCode: 'pa',
        dialCode: '507',
        flagClass: 'pa',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Papua New Guinea',
        isoCode: 'pg',
        dialCode: '675',
        flagClass: 'pg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Paraguay',
        isoCode: 'py',
        dialCode: '595',
        flagClass: 'py',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Peru',
        isoCode: 'pe',
        dialCode: '51',
        flagClass: 'pe',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Philippines',
        isoCode: 'ph',
        dialCode: '63',
        flagClass: 'ph',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Poland',
        isoCode: 'pl',
        dialCode: '48',
        flagClass: 'pl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Portugal',
        isoCode: 'pt',
        dialCode: '351',
        flagClass: 'pt',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Puerto Rico',
        isoCode: 'pr',
        dialCode: '1 939',
        flagClass: 'pr',
        priority: 0,
        areaCodes: [
            '787',
            '939'
        ],
        placeholder: ''
    },
    {
        name: 'Qatar',
        isoCode: 'qa',
        dialCode: '974',
        flagClass: 'qa',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Reunion',
        isoCode: 're',
        dialCode: '262',
        flagClass: 're',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Romania',
        isoCode: 'ro',
        dialCode: '40',
        flagClass: 'ro',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Russia',
        isoCode: 'ru',
        dialCode: '7',
        flagClass: 'ru',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Rwanda',
        isoCode: 'rw',
        dialCode: '250',
        flagClass: 'rw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Barthelemy',
        isoCode: 'bl',
        dialCode: '590',
        flagClass: 'bl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Helena, Ascension and Tristan Da Cunha',
        isoCode: 'sh',
        dialCode: '290',
        flagClass: 'sh',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Kitts and Nevis',
        isoCode: 'kn',
        dialCode: '1 869',
        flagClass: 'kn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Lucia',
        isoCode: 'lc',
        dialCode: '1 758',
        flagClass: 'lc',
        priority: 0,
        areaCodes: [
            '758'
        ],
        placeholder: ''
    },
    {
        name: 'Saint Martin',
        isoCode: 'mf',
        dialCode: '590',
        flagClass: 'mf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Pierre and Miquelon',
        isoCode: 'pm',
        dialCode: '508',
        flagClass: 'pm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saint Vincent and the Grenadines',
        isoCode: 'vc',
        dialCode: '1 784',
        flagClass: 'vc',
        priority: 0,
        areaCodes: [
            '784'
        ],
        placeholder: ''
    },
    {
        name: 'Samoa',
        isoCode: 'ws',
        dialCode: '685',
        flagClass: 'ws',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'San Marino',
        isoCode: 'sm',
        dialCode: '378',
        flagClass: 'sm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sao Tome and Principe',
        isoCode: 'st',
        dialCode: '239',
        flagClass: 'st',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Saudi Arabia',
        isoCode: 'sa',
        dialCode: '966',
        flagClass: 'sa',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Senegal',
        isoCode: 'sn',
        dialCode: '221',
        flagClass: 'sn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Serbia',
        isoCode: 'rs',
        dialCode: '381',
        flagClass: 'rs',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Seychelles',
        isoCode: 'sc',
        dialCode: '248',
        flagClass: 'sc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sierra Leone',
        isoCode: 'sl',
        dialCode: '232',
        flagClass: 'sl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Singapore',
        isoCode: 'sg',
        dialCode: '65',
        flagClass: 'sg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Slovakia',
        isoCode: 'sk',
        dialCode: '421',
        flagClass: 'sk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Slovenia',
        isoCode: 'si',
        dialCode: '386',
        flagClass: 'si',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Solomon Islands',
        isoCode: 'sb',
        dialCode: '677',
        flagClass: 'sb',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Somalia',
        isoCode: 'so',
        dialCode: '252',
        flagClass: 'so',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'South Africa',
        isoCode: 'za',
        dialCode: '27',
        flagClass: 'za',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Korea, Republic of South Korea',
        isoCode: 'kr',
        dialCode: '82',
        flagClass: 'kr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Spain',
        isoCode: 'es',
        dialCode: '34',
        flagClass: 'es',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sri Lanka',
        isoCode: 'lk',
        dialCode: '94',
        flagClass: 'lk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sudan',
        isoCode: 'sd',
        dialCode: '249',
        flagClass: 'sd',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Suriname',
        isoCode: 'sr',
        dialCode: '597',
        flagClass: 'sr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Svalbard and Jan Mayen',
        isoCode: 'sj',
        dialCode: '47',
        flagClass: 'sj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Swaziland',
        isoCode: 'sz',
        dialCode: '268',
        flagClass: 'sz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Sweden',
        isoCode: 'se',
        dialCode: '46',
        flagClass: 'se',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Switzerland',
        isoCode: 'ch',
        dialCode: '41',
        flagClass: 'ch',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Syrian Arab Republic',
        isoCode: 'sy',
        dialCode: '963',
        flagClass: 'sy',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Taiwan',
        isoCode: 'tw',
        dialCode: '886',
        flagClass: 'tw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tajikistan',
        isoCode: 'tj',
        dialCode: '992',
        flagClass: 'tj',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tanzania, United Republic of Tanzania',
        isoCode: 'tz',
        dialCode: '255',
        flagClass: 'tz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Thailand',
        isoCode: 'th',
        dialCode: '66',
        flagClass: 'th',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Timor-Leste',
        isoCode: 'tl',
        dialCode: '670',
        flagClass: 'tl',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Togo',
        isoCode: 'tg',
        dialCode: '228',
        flagClass: 'tg',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tokelau',
        isoCode: 'tk',
        dialCode: '690',
        flagClass: 'tk',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tonga',
        isoCode: 'to',
        dialCode: '676',
        flagClass: 'to',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Trinidad and Tobago',
        isoCode: 'tt',
        dialCode: '1 868',
        flagClass: 'tt',
        priority: 0,
        areaCodes: [
            '868'
        ],
        placeholder: ''
    },
    {
        name: 'Tunisia',
        isoCode: 'tn',
        dialCode: '216',
        flagClass: 'tn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Turkey',
        isoCode: 'tr',
        dialCode: '90',
        flagClass: 'tr',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Turkmenistan',
        isoCode: 'tm',
        dialCode: '993',
        flagClass: 'tm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Turks and Caicos Islands',
        isoCode: 'tc',
        dialCode: '1 649',
        flagClass: 'tc',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Tuvalu',
        isoCode: 'tv',
        dialCode: '688',
        flagClass: 'tv',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Virgin Islands, U.S.',
        isoCode: 'vi',
        dialCode: '1 340',
        flagClass: 'vi',
        priority: 0,
        areaCodes: [
            '340'
        ],
        placeholder: ''
    },
    {
        name: 'Uganda',
        isoCode: 'ug',
        dialCode: '256',
        flagClass: 'ug',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Ukraine',
        isoCode: 'ua',
        dialCode: '380',
        flagClass: 'ua',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'United Arab Emirates',
        isoCode: 'ae',
        dialCode: '971',
        flagClass: 'ae',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'United Kingdom',
        isoCode: 'gb',
        dialCode: '44',
        flagClass: 'gb',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'United States',
        isoCode: 'us',
        dialCode: '1',
        flagClass: 'us',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Uruguay',
        isoCode: 'uy',
        dialCode: '598',
        flagClass: 'uy',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Uzbekistan',
        isoCode: 'uz',
        dialCode: '998',
        flagClass: 'uz',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Vanuatu',
        isoCode: 'vu',
        dialCode: '678',
        flagClass: 'vu',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Holy See (Vatican City State)',
        isoCode: 'va',
        dialCode: '379',
        flagClass: 'va',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Venezuela, Bolivarian Republic of Venezuela',
        isoCode: 've',
        dialCode: '58',
        flagClass: 've',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Vietnam',
        isoCode: 'vn',
        dialCode: '84',
        flagClass: 'vn',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Wallis and Futuna',
        isoCode: 'wf',
        dialCode: '681',
        flagClass: 'wf',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Yemen',
        isoCode: 'ye',
        dialCode: '967',
        flagClass: 'ye',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Zambia',
        isoCode: 'zm',
        dialCode: '260',
        flagClass: 'zm',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Zimbabwe',
        isoCode: 'zw',
        dialCode: '263',
        flagClass: 'zw',
        priority: 0,
        placeholder: ''
    },
    {
        name: 'Aland Islands',
        isoCode: 'ax',
        dialCode: '358',
        flagClass: 'ax',
        priority: 0,
        placeholder: ''
    }
];

class IonIntlTelInputService {
    constructor() {
        this.countryList = countries;
    }
    getListOfCountries() {
        return this.countryList;
    }
}
/** @nocollapse */ IonIntlTelInputService.ɵfac = function IonIntlTelInputService_Factory(t) { return new (t || IonIntlTelInputService)(); };
/** @nocollapse */ IonIntlTelInputService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: IonIntlTelInputService, factory: IonIntlTelInputService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonIntlTelInputService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

class CountryPlaceholder {
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
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountryPlaceholder, [{
            type: Pipe,
            args: [{ name: 'countryPlaceholder' }]
        }], null, null);
})();

const _c0 = ["numberInput"];
function IonIntlTelInputComponent_span_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 6);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate2("", ctx_r0.dialCodePrefix, "", ctx_r0.country.dialCode, "");
    }
}
const _c1 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
/**
 * @ignore
 */
/**
 * @author Azzam Asghar <azzam.asghar@interstellus.com>
 * @author Steve Drew <sdrew@waitwell.ca>
 */
class IonIntlTelInputComponent {
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
    openModal() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
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
            yield modal.present();
            modal.onDidDismiss().then(data => {
                if (data.data) {
                    this.country = data.data;
                    this.onCodeChange();
                }
            });
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
/** @nocollapse */ IonIntlTelInputComponent.ɵfac = function IonIntlTelInputComponent_Factory(t) { return new (t || IonIntlTelInputComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Platform), i0.ɵɵdirectiveInject(IonIntlTelInputService), i0.ɵɵdirectiveInject(i1.ModalController)); };
/** @nocollapse */ IonIntlTelInputComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: IonIntlTelInputComponent, selectors: [["ion-intl-tel-input"]], viewQuery: function IonIntlTelInputComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.numberInputEl = _t.first);
        }
    }, hostVars: 12, hostBindings: function IonIntlTelInputComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
            i0.ɵɵclassProp("ion-intl-tel-input", ctx.cssClass)("ion-intl-tel-input-ios", ctx.isIos)("ion-intl-tel-input-md", ctx.isMD)("has-focus", ctx.hasFocus)("ion-intl-tel-input-has-value", ctx.hasValueCssClass)("ion-intl-tel-input-is-enabled", ctx.isEnabled);
        }
    }, inputs: { isEnabled: "isEnabled", autocomplete: "autocomplete", required: "required", defaultCountryiso: "defaultCountryiso", dialCodePrefix: "dialCodePrefix", enableAutoCountrySelect: "enableAutoCountrySelect", enablePlaceholder: "enablePlaceholder", fallbackPlaceholder: "fallbackPlaceholder", inputPlaceholder: "inputPlaceholder", usePatternPlaceholder: "usePatternPlaceholder", maxLength: "maxLength", modalTitle: "modalTitle", modalCssClass: "modalCssClass", modalSearchPlaceholder: "modalSearchPlaceholder", modalCloseText: "modalCloseText", modalCloseButtonSlot: "modalCloseButtonSlot", modalCanSearch: "modalCanSearch", modalShouldBackdropClose: "modalShouldBackdropClose", modalShouldFocusSearchbar: "modalShouldFocusSearchbar", modalSearchFailText: "modalSearchFailText", onlyCountries: "onlyCountries", preferredCountries: "preferredCountries", selectFirstCountry: "selectFirstCountry", separateDialCode: "separateDialCode" }, outputs: { numberChange: "numberChange", numberBlur: "numberBlur", numberFocus: "numberFocus", numberInput: "numberInput", codeChange: "codeChange", codeOpen: "codeOpen", codeClose: "codeClose", codeSelect: "codeSelect" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef((() => IonIntlTelInputComponent)),
                multi: true,
            },
        ]), i0.ɵɵNgOnChangesFeature], decls: 8, vars: 23, consts: [["fill", "clear", "aria-label", "country", 1, "ion-intl-tel-input-btn", 3, "disabled", "click"], ["class", "ion-intl-tel-input-code", 4, "ngIf"], ["name", "caret-down", 2, "font-size", "14px", "opacity", ".5"], [1, "ion-intl-tel-input-number"], ["type", "tel", 3, "ngModel", "autocomplete", "required", "disabled", "placeholder", "ngModelChange", "ionBlur", "ionChange", "ionFocus", "ionInput", "keydown"], ["numberInput", ""], [1, "ion-intl-tel-input-code"]], template: function IonIntlTelInputComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
            i0.ɵɵproperty("disabled", ctx.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate1("ion-intl-tel-input-flag fi fi-", ctx.country.flagClass, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.separateDialCode);
            i0.ɵɵadvance(3);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBindV(7, 11, i0.ɵɵpureFunction5(17, _c1, ctx.country, ctx.inputPlaceholder, ctx.separateDialCode, ctx.fallbackPlaceholder, ctx.usePatternPlaceholder)));
            i0.ɵɵproperty("ngModel", ctx.phoneNumber)("autocomplete", ctx.autocomplete)("required", ctx.required)("disabled", ctx.disabled);
            i0.ɵɵattribute("maxLength", ctx.maxLength);
        }
    }, dependencies: [i2.NgIf, i4.NgControlStatus, i4.RequiredValidator, i4.NgModel, i1.IonButton, i1.IonIcon, i1.IonInput, i1.TextValueAccessor, CountryPlaceholder], styles: ["[_nghost-%COMP%]{width:100%;display:flex;align-items:center}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]{color:var(--ion-color);height:100%;margin:0}[_nghost-%COMP%]   ion-button[_ngcontent-%COMP%]::part(native){padding-inline-start:0;padding-inline-end:2px;margin:0;font-size:16px;font-weight:400}[_nghost-%COMP%]   .fi[_ngcontent-%COMP%]{margin-right:5px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonIntlTelInputComponent, [{
            type: Component,
            args: [{ selector: 'ion-intl-tel-input', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => IonIntlTelInputComponent)),
                            multi: true,
                        },
                    ], template: "<ion-button\n        fill=\"clear\"\n        class=\"ion-intl-tel-input-btn\"\n        [disabled] = \"disabled\"\n        aria-label=\"country\"\n        (click)=\"openModal()\"\n>\n  <span class=\"ion-intl-tel-input-flag fi fi-{{country.flagClass}}\"></span><span class=\"ion-intl-tel-input-code\" *ngIf=\"separateDialCode\">{{dialCodePrefix}}{{country.dialCode}}</span>\n  <ion-icon style=\"font-size:14px;opacity:.5;\" name=\"caret-down\"></ion-icon>\n</ion-button>\n<div class=\"ion-intl-tel-input-number\">\n  <ion-input\n          #numberInput\n          [(ngModel)]=\"phoneNumber\"\n          [autocomplete]=\"autocomplete\"\n          [required]=\"required\"\n          [disabled] = \"disabled\"\n          [attr.maxLength]=\"maxLength\"\n          type=\"tel\"\n          (ionBlur)=\"onIonNumberBlur()\"\n          (ionChange)=\"onIonNumberChange($event)\"\n          (ionFocus)=\"onIonNumberFocus()\"\n          (ionInput)=\"onIonNumberInput($event)\"\n          (keydown)=\"onNumberKeyDown($event)\"\n          (ngModelChange)=\"onNumberChange()\"\n          placeholder=\"{{country | countryPlaceholder: inputPlaceholder:separateDialCode:fallbackPlaceholder:usePatternPlaceholder}}\" >\n  </ion-input>\n</div>\n", styles: [":host{width:100%;display:flex;align-items:center}:host ion-button{color:var(--ion-color);height:100%;margin:0}:host ion-button::part(native){padding-inline-start:0;padding-inline-end:2px;margin:0;font-size:16px;font-weight:400}:host .fi{margin-right:5px}\n"] }]
        }], function () { return [{ type: i0.ElementRef }, { type: i1.Platform }, { type: IonIntlTelInputService }, { type: i1.ModalController }]; }, { cssClass: [{
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
            }] });
})();

class IonIntlTelInputModule {
}
/** @nocollapse */ IonIntlTelInputModule.ɵfac = function IonIntlTelInputModule_Factory(t) { return new (t || IonIntlTelInputModule)(); };
/** @nocollapse */ IonIntlTelInputModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: IonIntlTelInputModule });
/** @nocollapse */ IonIntlTelInputModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [
        IonIntlTelInputService
    ], imports: [CommonModule,
        FormsModule,
        IonicModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonIntlTelInputModule, [{
            type: NgModule,
            args: [{
                    declarations: [
                        CountryPlaceholder,
                        IonIntlTelInputValidatorDirective,
                        IonIntlTelInputComponent,
                        IonIntTelCodeComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                    ],
                    exports: [
                        IonIntlTelInputComponent,
                        IonIntlTelInputValidatorDirective,
                        IonIntTelCodeComponent
                    ],
                    providers: [
                        IonIntlTelInputService
                    ],
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IonIntlTelInputModule, { declarations: [CountryPlaceholder,
            IonIntlTelInputValidatorDirective,
            IonIntlTelInputComponent,
            IonIntTelCodeComponent], imports: [CommonModule,
            FormsModule,
            IonicModule], exports: [IonIntlTelInputComponent,
            IonIntlTelInputValidatorDirective,
            IonIntTelCodeComponent] });
})();

/*
 * Public API Surface of ion-intl-tel-input
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonIntTelCodeComponent, IonIntlTelInputComponent, IonIntlTelInputModule, IonIntlTelInputService, IonIntlTelInputValidatorDirective, IonIntlTelInputValidators };
//# sourceMappingURL=ion-intl-tel-input.mjs.map
