import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CountryPlaceholder } from './pipes/country-placeholder';
import { IonIntlTelInputValidatorDirective } from './ion-intl-tel-input.directive';
import { IonIntlTelInputComponent } from './ion-intl-tel-input/ion-intl-tel-input.component';
import { IonIntlTelInputService } from './ion-intl-tel-input.service';
import { IonIntTelCodeComponent } from './ion-intl-tel-input/ion-intl-tel-code.component';
import * as i0 from "@angular/core";
export class IonIntlTelInputModule {
}
/** @nocollapse */ IonIntlTelInputModule.ɵfac = function IonIntlTelInputModule_Factory(t) { return new (t || IonIntlTelInputModule)(); };
/** @nocollapse */ IonIntlTelInputModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: IonIntlTelInputModule });
/** @nocollapse */ IonIntlTelInputModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [
        IonIntlTelInputService
    ], imports: [CommonModule,
        FormsModule,
        IonicModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IonIntlTelInputModule, [{
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IonIntlTelInputModule, { declarations: [CountryPlaceholder,
        IonIntlTelInputValidatorDirective,
        IonIntlTelInputComponent,
        IonIntTelCodeComponent], imports: [CommonModule,
        FormsModule,
        IonicModule], exports: [IonIntlTelInputComponent,
        IonIntlTelInputValidatorDirective,
        IonIntTelCodeComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL2lvbi1pbnRsLXRlbC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQTZCLGlDQUFpQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBdUIxRixNQUFNLE9BQU8scUJBQXFCOzs2R0FBckIscUJBQXFCO3NHQUFyQixxQkFBcUI7MkdBSnJCO1FBQ1Qsc0JBQXNCO0tBQ3ZCLFlBWEMsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO3VGQVdGLHFCQUFxQjtjQXJCakMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixrQkFBa0I7b0JBQ2xCLGlDQUFpQztvQkFDakMsd0JBQXdCO29CQUN4QixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asd0JBQXdCO29CQUN4QixpQ0FBaUM7b0JBQ2pDLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULHNCQUFzQjtpQkFDdkI7YUFDRjs7d0ZBQ1kscUJBQXFCLG1CQW5COUIsa0JBQWtCO1FBQ2xCLGlDQUFpQztRQUNqQyx3QkFBd0I7UUFDeEIsc0JBQXNCLGFBR3RCLFlBQVk7UUFDWixXQUFXO1FBQ1gsV0FBVyxhQUdYLHdCQUF3QjtRQUN4QixpQ0FBaUM7UUFDakMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBDb3VudHJ5UGxhY2Vob2xkZXIgfSBmcm9tICcuL3BpcGVzL2NvdW50cnktcGxhY2Vob2xkZXInO1xuaW1wb3J0IHsgSW9uSW50bFRlbElucHV0VmFsaWRhdG9ycywgSW9uSW50bFRlbElucHV0VmFsaWRhdG9yRGlyZWN0aXZlIH0gZnJvbSAnLi9pb24taW50bC10ZWwtaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbkludGxUZWxJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vaW9uLWludGwtdGVsLWlucHV0L2lvbi1pbnRsLXRlbC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uSW50bFRlbElucHV0U2VydmljZSB9IGZyb20gJy4vaW9uLWludGwtdGVsLWlucHV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSW9uSW50VGVsQ29kZUNvbXBvbmVudCB9IGZyb20gJy4vaW9uLWludGwtdGVsLWlucHV0L2lvbi1pbnRsLXRlbC1jb2RlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvdW50cnlQbGFjZWhvbGRlcixcbiAgICBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgSW9uSW50bFRlbElucHV0Q29tcG9uZW50LFxuICAgIElvbkludFRlbENvZGVDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIElvbkludGxUZWxJbnB1dENvbXBvbmVudCxcbiAgICBJb25JbnRsVGVsSW5wdXRWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgSW9uSW50VGVsQ29kZUNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBJb25JbnRsVGVsSW5wdXRTZXJ2aWNlXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIElvbkludGxUZWxJbnB1dE1vZHVsZSB7IH1cbiJdfQ==