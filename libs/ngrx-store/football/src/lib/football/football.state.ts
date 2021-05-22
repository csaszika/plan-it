import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { FootballPlanConfigurationState, reducer as planConfigReducer } from './plan-configurations/football-plan-configuration.reducer';
import { FootballTrainingPlansState, footballTrainingPlansReducer } from './training-plans/football-training-plans.reducer';

export const footballFeatureKey = 'football';

export interface FootballState {
    footballPlanConfiguration: FootballPlanConfigurationState;
    footballTrainingPlans: FootballTrainingPlansState;
}

export const reducers: ActionReducerMap<FootballState> = {
    footballPlanConfiguration: planConfigReducer,
    footballTrainingPlans: footballTrainingPlansReducer,
};

export const selectFootballFeature = createFeatureSelector<FootballState>(footballFeatureKey);
