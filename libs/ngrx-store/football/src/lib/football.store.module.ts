import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromFootball from './football/football.state';
import { FootballPlanConfigurationEffects } from './football/plan-configurations/football-plan-configuration.effects';
import { FootballTrainingPlansEffects } from './football/training-plans/football-training-plans.effects';

@NgModule({
    imports: [
        StoreModule.forFeature(fromFootball.footballFeatureKey, fromFootball.reducers),
        EffectsModule.forFeature([FootballPlanConfigurationEffects, FootballTrainingPlansEffects]),
    ],
})
export class FootballStoreModule {}
