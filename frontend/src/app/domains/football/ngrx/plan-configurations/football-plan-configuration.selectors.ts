import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FootballPlanConfiguration } from '../../../../shared/types/plan-configuration.types';
import { footballFeatureKey, FootballState } from '../index';
import { FootballPlanConfigurationState } from './football-plan-configuration.reducer';

export const selectFootballPlanConfigurationFeature = createFeatureSelector<FootballState>(footballFeatureKey);

export const selectFootballPlanConfigurationState = createSelector(
  selectFootballPlanConfigurationFeature,
  (state: FootballState) => state.footballPlanConfiguration
);

export const selectFootballPlanConfiguration = createSelector(
  selectFootballPlanConfigurationState,
  (state: FootballPlanConfigurationState): FootballPlanConfiguration => state.configuration
);

export const selectFootballPlanLevels = createSelector(
  selectFootballPlanConfiguration,
  (configuration: FootballPlanConfiguration): Array<number> => configuration.levels
);

export const selectFootballPlanAgeClasses = createSelector(
  selectFootballPlanConfiguration,
  (configuration: FootballPlanConfiguration): Array<string> => configuration.ageClasses
);

export const selectFootballPlanConfigurationLoading = createSelector(
  selectFootballPlanConfigurationState,
  (state: FootballPlanConfigurationState): boolean => state.loading
);
export const selectFootballPlanConfigurationError = createSelector(
  selectFootballPlanConfigurationState,
  (state: FootballPlanConfigurationState): boolean => state.error
);
