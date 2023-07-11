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
/** @nocollapse */ IonIntlTelInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ IonIntlTelInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputModule, declarations: [CountryPlaceholder,
        IonIntlTelInputValidatorDirective,
        IonIntlTelInputComponent,
        IonIntTelCodeComponent], imports: [CommonModule,
        FormsModule,
        IonicModule], exports: [IonIntlTelInputComponent,
        IonIntlTelInputValidatorDirective,
        IonIntTelCodeComponent] });
/** @nocollapse */ IonIntlTelInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputModule, providers: [
        IonIntlTelInputService
    ], imports: [CommonModule,
        FormsModule,
        IonicModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonIntlTelInputModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWludGwtdGVsLWlucHV0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2lvbi1pbnRsLXRlbC1pbnB1dC9zcmMvbGliL2lvbi1pbnRsLXRlbC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQTZCLGlDQUFpQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7O0FBdUIxRixNQUFNLE9BQU8scUJBQXFCOztxSUFBckIscUJBQXFCO3NJQUFyQixxQkFBcUIsaUJBbkI5QixrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLHdCQUF3QjtRQUN4QixzQkFBc0IsYUFHdEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXLGFBR1gsd0JBQXdCO1FBQ3hCLGlDQUFpQztRQUNqQyxzQkFBc0I7c0lBTWIscUJBQXFCLGFBSnJCO1FBQ1Qsc0JBQXNCO0tBQ3ZCLFlBWEMsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXOzJGQVdGLHFCQUFxQjtrQkFyQmpDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsaUNBQWlDO3dCQUNqQyx3QkFBd0I7d0JBQ3hCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDUCx3QkFBd0I7d0JBQ3hCLGlDQUFpQzt3QkFDakMsc0JBQXNCO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Qsc0JBQXNCO3FCQUN2QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuaW1wb3J0IHsgQ291bnRyeVBsYWNlaG9sZGVyIH0gZnJvbSAnLi9waXBlcy9jb3VudHJ5LXBsYWNlaG9sZGVyJztcbmltcG9ydCB7IElvbkludGxUZWxJbnB1dFZhbGlkYXRvcnMsIElvbkludGxUZWxJbnB1dFZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vaW9uLWludGwtdGVsLWlucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25JbnRsVGVsSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2lvbi1pbnRsLXRlbC1pbnB1dC9pb24taW50bC10ZWwtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IElvbkludGxUZWxJbnB1dFNlcnZpY2UgfSBmcm9tICcuL2lvbi1pbnRsLXRlbC1pbnB1dC5zZXJ2aWNlJztcbmltcG9ydCB7IElvbkludFRlbENvZGVDb21wb25lbnQgfSBmcm9tICcuL2lvbi1pbnRsLXRlbC1pbnB1dC9pb24taW50bC10ZWwtY29kZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb3VudHJ5UGxhY2Vob2xkZXIsXG4gICAgSW9uSW50bFRlbElucHV0VmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIElvbkludGxUZWxJbnB1dENvbXBvbmVudCxcbiAgICBJb25JbnRUZWxDb2RlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJb25JbnRsVGVsSW5wdXRDb21wb25lbnQsXG4gICAgSW9uSW50bFRlbElucHV0VmFsaWRhdG9yRGlyZWN0aXZlLFxuICAgIElvbkludFRlbENvZGVDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSW9uSW50bFRlbElucHV0U2VydmljZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBJb25JbnRsVGVsSW5wdXRNb2R1bGUgeyB9XG4iXX0=