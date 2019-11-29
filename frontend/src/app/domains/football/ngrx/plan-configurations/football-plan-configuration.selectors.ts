import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DataLoadingError } from '../../../../shared/types/data-loading-error.types';
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

export const selectFootballPlanConfigurationShowState = createSelector(
  selectFootballPlanConfigurationState,
  (state: FootballPlanConfigurationState): DataLoadingError => {
    if (state.loading) {
      return DataLoadingError.LOADING;
    }
    if (state.error) {
      return DataLoadingError.ERROR;
    }
    return DataLoadingError.DATA;
  }
);
