import { Action, createReducer, on } from '@ngrx/store';
import { FootballPlanConfiguration } from '@plan-it/types/plan-configuration';
import {
    getFootballConfigurations,
    loadFootballConfigurations,
    loadFootballConfigurationsFailure,
} from '@plan-it/ngrx-actions/football-configuration';

export interface FootballPlanConfigurationState {
    configuration: FootballPlanConfiguration;
    loading: boolean;
    error: boolean;
}

export const initialState = (): FootballPlanConfigurationState => {
    return {
        configuration: { ageClasses: [], levels: [] },
        loading: false,
        error: false,
    };
};

export const planConfigurationReducer = createReducer(
    initialState(),
    on(
        getFootballConfigurations,
        (state: FootballPlanConfigurationState): FootballPlanConfigurationState => ({ ...state, loading: true, error: false })
    ),
    on(
        loadFootballConfigurations,
        (
            state: FootballPlanConfigurationState,
            { configuration }: { configuration: FootballPlanConfiguration }
        ): FootballPlanConfigurationState => ({
            ...state,
            configuration,
            loading: false,
        })
    ),
    on(
        loadFootballConfigurationsFailure,
        (state: FootballPlanConfigurationState): FootballPlanConfigurationState => ({
            ...state,
            error: true,
            loading: false,
        })
    )
);

export function reducer(state: FootballPlanConfigurationState = initialState(), action: Action): FootballPlanConfigurationState {
    return planConfigurationReducer(state, action);
}
