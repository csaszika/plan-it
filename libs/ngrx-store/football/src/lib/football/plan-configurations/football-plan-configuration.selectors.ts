import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DataLoadingError } from '@plan-it/types/common';
import { FootballPlanConfiguration } from '@plan-it/types/plan-configuration';

import * as football from '../football.state';

import { FootballPlanConfigurationState } from './football-plan-configuration.reducer';

export const selectFootballPlanConfigurationFeature = createFeatureSelector<football.FootballState>(football.footballFeatureKey);

export const selectFootballPlanConfigurationState = createSelector(
    selectFootballPlanConfigurationFeature,
    (state: football.FootballState) => state.footballPlanConfiguration
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
