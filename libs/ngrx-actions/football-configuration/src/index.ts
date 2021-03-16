import { createAction, props } from '@ngrx/store';
import { FootballPlanConfiguration } from '@plan-it/types/plan-configuration';

export const getFootballConfigurations = createAction(
    '[LoadFootballConfiguration] Load LoadFootballConfigurations',
    props<{ configurationType: string }>()
);

export const loadFootballConfigurations = createAction(
    '[LoadFootballConfiguration] Load LoadFootballConfigurations Success',
    props<{ configuration: FootballPlanConfiguration }>()
);

export const loadFootballConfigurationsFailure = createAction('[LoadFootballConfiguration] Load LoadFootballConfigurations Failure');
