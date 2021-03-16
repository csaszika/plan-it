import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// linting is  off because of this line
import { environment } from '@plan-it/environments';

@NgModule({
    imports: [
        StoreModule.forRoot(
            {},
            {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                },
            }
        ),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !environment.production }),
        EffectsModule.forRoot([]),
    ],
})
export class NgrxCoreConfigurationModule {}
