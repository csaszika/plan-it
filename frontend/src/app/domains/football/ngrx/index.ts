import { ActionReducerMap } from '@ngrx/store';

import { FootballPlanConfigurationState, reducer as planConfigReducer } from './plan-configurations/football-plan-configuration.reducer';

export const footballFeatureKey = 'football';

export interface FootballState {
  footballPlanConfiguration: FootballPlanConfigurationState;
}

export const reducers: ActionReducerMap<FootballState> = {
  footballPlanConfiguration: planConfigReducer,
};
