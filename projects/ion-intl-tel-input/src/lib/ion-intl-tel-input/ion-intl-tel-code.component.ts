import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CountryI } from '../models/country.model';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonItem,
  IonList, IonRadio,
  IonRadioGroup,
  IonSearchbar, IonText,
  IonTitle,
  IonToolbar,
  ModalController
} from '@ionic/angular/standalone';
import {CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {NgIf} from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-intl-tel-code',
  templateUrl: './ion-intl-tel-code.component.html',
  standalone: true,
  imports: [
    IonToolbar,
    IonTitle,
    IonHeader,
    IonButtons,
    IonButton,
    IonSearchbar,
    IonContent,
    CdkVirtualScrollViewport,
    IonList,
    IonRadioGroup,
    IonItem,
    CdkFixedSizeVirtualScroll,
    IonRadio,
    IonText,
    CdkVirtualForOf,
    NgIf
  ]
})
export class IonIntTelCodeComponent implements OnInit {

  @Input() country: CountryI;
  @Input() canSearch: boolean;
  @Input() closeButtonText = 'Close';
  @Input() closeButtonSlot = 'end';
  @Input() countries: CountryI[];
  @Input() searchFailText: string;
  @Input() searchPlaceholder: string;
  @Input() shouldFocusSearchbar: boolean;
  @Input() title: string;
  @Input() dialCode: string;

  @ViewChild('searchBar') sbar: IonSearchbar;

  private allCountries: CountryI[];

  public notFound;

  constructor(
      private modalCtrl: ModalController
  ) {

  }

  ngOnInit(): void {
    this.allCountries = this.countries;
  }

  ionViewDidEnter() {
    if (this.sbar && this.shouldFocusSearchbar) {
      setTimeout( () => { this.sbar.setFocus(); }, 400);
    }
  }

  search(ev) {
    let search = ev.detail.value;
    this.notFound = false;
    if (search === '' || search === null) {
      this.countries = this.allCountries;
    } else {
      search = search.toLocaleLowerCase();
      this.countries = this.allCountries.filter( r => {
        return (r.name && r.name.toLocaleLowerCase().indexOf(search) !== -1);
      });
      if (this.countries.length === 0) {
        this.notFound = true;
      }
    }
  }

  async itemTapped(c) {
    await this.modalCtrl.dismiss(c);
  }

  async closeModal() {
    await this.modalCtrl.dismiss(null);
  }

}
