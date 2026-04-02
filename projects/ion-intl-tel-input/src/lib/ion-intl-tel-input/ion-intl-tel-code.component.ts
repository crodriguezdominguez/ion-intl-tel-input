import {Component, OnInit, input, computed, inject, signal, viewChild, ChangeDetectionStrategy} from '@angular/core';
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


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ion-intl-tel-code',
  templateUrl: './ion-intl-tel-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    CdkVirtualForOf
]
})
export class IonIntTelCodeComponent implements OnInit {
  private readonly modalController = inject(ModalController);

  readonly country = input<CountryI>(undefined);
  readonly canSearch = input<boolean>(undefined);
  readonly closeButtonText = input('Close');
  readonly closeButtonSlot = input('end');
  readonly countries = input<CountryI[]>(undefined);
  readonly searchFailText = input<string>(undefined);
  readonly searchPlaceholder = input<string>(undefined);
  readonly shouldFocusSearchbar = input<boolean>(undefined);
  readonly title = input<string>(undefined);
  readonly dialCode = input<string>(undefined);

  protected readonly searchBar = viewChild<IonSearchbar>('searchBar');

  protected readonly displayedCountries = computed(() => {
    let search = this.searchText();
    if (search === '' || search === null) {
      return this.allCountries;
    } else {
      search = search.toLocaleLowerCase();
      return this.allCountries.filter( r => {
        return (r.name && r.name.toLocaleLowerCase().indexOf(search) !== -1);
      });
    }
  });

  protected readonly searchText = signal<string>(null);

  protected readonly notFound = computed(() => {
    return (this.displayedCountries().length === 0);
  });

  private allCountries: CountryI[];

  ngOnInit(): void {
    this.allCountries = this.countries();
  }

  ionViewDidEnter() {
    if (this.searchBar() && this.shouldFocusSearchbar()) {
      setTimeout( () => { this.searchBar().setFocus().then(); }, 400);
    }
  }

  search(ev) {
    this.searchText.set(ev.detail.value);
  }

  async itemTapped(c) {
    await this.modalController.dismiss(c);
  }

  async closeModal() {
    await this.modalController.dismiss(null);
  }
}
