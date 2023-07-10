import { Component, Input, ViewChild } from '@angular/core';
import { IonSearchbar, ModalController } from '@ionic/angular';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/common";
const _c0 = ["searchBar"];
function IonIntTelCodeComponent_ion_searchbar_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ion-searchbar", 7, 8);
    i0.ɵɵlistener("keyup.enter", function IonIntTelCodeComponent_ion_searchbar_7_Template_ion_searchbar_keyup_enter_0_listener($event) { return $event.target.blur(); })("ionChange", function IonIntTelCodeComponent_ion_searchbar_7_Template_ion_searchbar_ionChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.search($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.searchPlaceholder);
    i0.ɵɵproperty("debounce", 400);
} }
function IonIntTelCodeComponent_ion_item_11_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2("", ctx_r8.dialCode, "", c_r7.displayDialCode, "");
} }
function IonIntTelCodeComponent_ion_item_11_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
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
} }
function IonIntTelCodeComponent_ion_item_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ion-item", 13)(1, "ion-text");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.searchFailText);
} }
export class IonIntTelCodeComponent {
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
/** @nocollapse */ IonIntTelCodeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: IonIntTelCodeComponent, selectors: [["ion-intl-tel-code"]], viewQuery: function IonIntTelCodeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sbar = _t.first);
    } }, inputs: { country: "country", canSearch: "canSearch", closeButtonText: "closeButtonText", closeButtonSlot: "closeButtonSlot", countries: "countries", searchFailText: "searchFailText", searchPlaceholder: "searchPlaceholder", shouldFocusSearchbar: "shouldFocusSearchbar", title: "title", dialCode: "dialCode" }, decls: 13, vars: 7, consts: [[1, "ion-text-center"], [3, "slot"], ["ion-button", "", 3, "click"], [3, "placeholder", "debounce", "keyup.enter", "ionChange", 4, "ngIf"], [3, "value"], ["style", "white-space:normal", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], [3, "placeholder", "debounce", "keyup.enter", "ionChange"], ["searchBar", ""], [2, "white-space", "normal"], ["slot", "start", "color", "primary", 3, "value", "click"], [4, "ngIf"], ["slot", "end"], ["lines", "none"]], template: function IonIntTelCodeComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, dependencies: [i2.NgForOf, i2.NgIf, i1.IonButton, i1.IonButtons, i1.IonContent, i1.IonHeader, i1.IonItem, i1.IonLabel, i1.IonList, i1.IonRadio, i1.IonRadioGroup, i1.IonSearchbar, i1.IonText, i1.IonTitle, i1.IonToolbar, i1.RadioValueAccessor, i1.SelectValueAccessor, i1.TextValueAccessor], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonIntTelCodeComponent, [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWNvZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaW9uLWludGwtdGVsLWlucHV0L3NyYy9saWIvaW9uLWludGwtdGVsLWlucHV0L2lvbi1pbnRsLXRlbC1jb2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL2lvbi1pbnRsLXRlbC1pbnB1dC9pb24taW50bC10ZWwtY29kZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ1U3RCwyQ0FDaUY7SUFBbEUsNElBQWUsb0JBQW9CLElBQUMscUxBQWMsZUFBQSxxQkFBYyxDQUFBLElBQTVCO0lBQThCLGlCQUFnQjs7O0lBRHJELGlFQUFtQztJQUFDLDhCQUFnQjs7O0lBU3BFLDRCQUF1QjtJQUFBLFlBQWlDO0lBQUEsaUJBQU87Ozs7SUFBeEMsZUFBaUM7SUFBakMsd0VBQWlDOzs7O0lBRmhGLG1DQUFpRSxvQkFBQTtJQUNILHNPQUFTLGVBQUEsd0JBQWEsQ0FBQSxJQUFDO0lBQUMsaUJBQVk7SUFDaEcsaUNBQVc7SUFBQSxZQUFXO0lBQUEsc0ZBQStEO0lBQUEsaUJBQVk7SUFDakcsMkJBQXNEO0lBQ3hELGlCQUFXOzs7O0lBSEUsZUFBbUI7SUFBbkIsb0NBQW1CO0lBQ25CLGVBQVc7SUFBWCx5Q0FBVztJQUFPLGVBQWM7SUFBZCxzQ0FBYztJQUMxQixlQUE2QjtJQUE3Qix1REFBNkI7OztJQUdsRCxvQ0FBd0MsZUFBQTtJQUM1QixZQUFrQjtJQUFBLGlCQUFXLEVBQUE7OztJQUE3QixlQUFrQjtJQUFsQiwy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U0FBUzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvblNlYXJjaGJhciwgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ291bnRyeUkgfSBmcm9tICcuLi9tb2RlbHMvY291bnRyeS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnaW9uLWludGwtdGVsLWNvZGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW9uLWludGwtdGVsLWNvZGUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSW9uSW50VGVsQ29kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgY291bnRyeTogQ291bnRyeUk7XG4gIEBJbnB1dCgpIGNhblNlYXJjaDogYm9vbGVhbjtcbiAgQElucHV0KCkgY2xvc2VCdXR0b25UZXh0ID0gJ0Nsb3NlJztcbiAgQElucHV0KCkgY2xvc2VCdXR0b25TbG90ID0gJ2VuZCc7XG4gIEBJbnB1dCgpIGNvdW50cmllczogQ291bnRyeUlbXTtcbiAgQElucHV0KCkgc2VhcmNoRmFpbFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgc2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgc2hvdWxkRm9jdXNTZWFyY2hiYXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpYWxDb2RlOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnc2VhcmNoQmFyJykgc2JhcjogSW9uU2VhcmNoYmFyO1xuXG4gIHByaXZhdGUgYWxsQ291bnRyaWVzOiBDb3VudHJ5SVtdO1xuXG4gIHB1YmxpYyBub3RGb3VuZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXJcbiAgKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYWxsQ291bnRyaWVzID0gdGhpcy5jb3VudHJpZXM7XG4gIH1cblxuICBpb25WaWV3RGlkRW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuc2JhciAmJiB0aGlzLnNob3VsZEZvY3VzU2VhcmNoYmFyKSB7XG4gICAgICBzZXRUaW1lb3V0KCAoKSA9PiB7IHRoaXMuc2Jhci5zZXRGb2N1cygpOyB9LCA0MDApO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaChldikge1xuICAgIGxldCBzZWFyY2ggPSBldi5kZXRhaWwudmFsdWU7XG4gICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xuICAgIGlmIChzZWFyY2ggPT09ICcnIHx8IHNlYXJjaCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5jb3VudHJpZXMgPSB0aGlzLmFsbENvdW50cmllcztcbiAgICB9IGVsc2Uge1xuICAgICAgc2VhcmNoID0gc2VhcmNoLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLmNvdW50cmllcyA9IHRoaXMuYWxsQ291bnRyaWVzLmZpbHRlciggciA9PiB7XG4gICAgICAgIHJldHVybiAoci5uYW1lICYmIHIubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoKSAhPT0gLTEpO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5jb3VudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMubm90Rm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGl0ZW1UYXBwZWQoYykge1xuICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3MoYyk7XG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3MobnVsbCk7XG4gIH1cblxufVxuIiwiPGlvbi1oZWFkZXI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLXRpdGxlIGNsYXNzPVwiaW9uLXRleHQtY2VudGVyXCI+XG4gICAgICB7e3RpdGxlfX1cbiAgICA8L2lvbi10aXRsZT5cblxuICAgIDxpb24tYnV0dG9ucyBbc2xvdF09XCJjbG9zZUJ1dHRvblNsb3RcIj5cbiAgICAgIDxpb24tYnV0dG9uIGlvbi1idXR0b24gKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPnt7Y2xvc2VCdXR0b25UZXh0fX08L2lvbi1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cblxuICA8L2lvbi10b29sYmFyPlxuICA8aW9uLXNlYXJjaGJhciAjc2VhcmNoQmFyICpuZ0lmPVwiY2FuU2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJ7e3NlYXJjaFBsYWNlaG9sZGVyfX1cIiBbZGVib3VuY2VdPVwiNDAwXCJcbiAgICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cIiRldmVudC50YXJnZXQuYmx1cigpXCIgKGlvbkNoYW5nZSk9XCJzZWFyY2goJGV2ZW50KVwiPjwvaW9uLXNlYXJjaGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50PlxuICA8aW9uLWxpc3Q+XG4gICAgPGlvbi1yYWRpby1ncm91cCBbdmFsdWVdPVwiY291bnRyeS5pc29Db2RlXCI+XG4gICAgICA8aW9uLWl0ZW0gc3R5bGU9XCJ3aGl0ZS1zcGFjZTpub3JtYWxcIiAqbmdGb3I9XCJsZXQgYyBvZiBjb3VudHJpZXNcIj5cbiAgICAgICAgPGlvbi1yYWRpbyBbdmFsdWVdPVwiYy5pc29Db2RlXCIgc2xvdD1cInN0YXJ0XCIgY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIml0ZW1UYXBwZWQoYylcIj48L2lvbi1yYWRpbz5cbiAgICAgICAgPGlvbi1sYWJlbD57e2MubmFtZX19IDxzcGFuICpuZ0lmPVwiZGlhbENvZGVcIj57e2RpYWxDb2RlfX17e2MuZGlzcGxheURpYWxDb2RlfX08L3NwYW4+PC9pb24tbGFiZWw+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJlbmRcIiBjbGFzcz1cImZpIGZpLXt7Yy5mbGFnQ2xhc3N9fVwiPjwvc3Bhbj5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tcmFkaW8tZ3JvdXA+XG4gICAgPGlvbi1pdGVtIGxpbmVzPVwibm9uZVwiICpuZ0lmPVwibm90Rm91bmRcIj5cbiAgICAgIDxpb24tdGV4dD57e3NlYXJjaEZhaWxUZXh0fX08L2lvbi10ZXh0PlxuICAgIDwvaW9uLWl0ZW0+XG4gIDwvaW9uLWxpc3Q+XG48L2lvbi1jb250ZW50PlxuIl19