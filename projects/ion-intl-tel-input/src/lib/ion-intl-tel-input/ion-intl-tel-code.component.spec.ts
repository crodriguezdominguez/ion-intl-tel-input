import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonIntlTelCodeComponent } from './ion-intl-tel-code.component';

describe('IonIntlTelCodeComponent', () => {
  let component: IonIntlTelCodeComponent;
  let fixture: ComponentFixture<IonIntlTelCodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IonIntlTelCodeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonIntlTelCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
