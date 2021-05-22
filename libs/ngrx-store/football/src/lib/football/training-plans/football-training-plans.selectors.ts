import { createSelector } from '@ngrx/store';

import { FootballState, selectFootballFeature } from '../football.state';

import { FootballTrainingPlansState, selectAllFootballPlans } from './football-training-plans.reducer';

export const selectFootballTrainingPlansState = createSelector(
    selectFootballFeature,
    (state: FootballState) => state.footballTrainingPlans
);

export const selectSelectedFootballTrainingPlanIdState = createSelector(
    selectFootballTrainingPlansState,
    (state: FootballTrainingPlansState) => state.selectedPlanId
);

export const selectFootballTrainingPlans = createSelector(selectFootballTrainingPlansState, selectAllFootballPlans);
