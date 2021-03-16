import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromFootball from './football/football.state';
import { FootballPlanConfigurationEffects } from './football/plan-configurations/football-plan-configuration.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(fromFootball.footballFeatureKey, fromFootball.reducers),
        EffectsModule.forFeature([FootballPlanConfigurationEffects]),
    ],
})
export class FootballStoreModule {}
