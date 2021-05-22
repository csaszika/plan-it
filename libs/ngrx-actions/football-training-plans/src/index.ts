import { createAction, props } from '@ngrx/store';
import { TrainingPlan } from '@plan-it/types/training-plan';
import { PageEvent } from '@angular/material/paginator';

export const saveFootballTrainingPlan = createAction(
    '[Football training plans] Save Football training plans',
    props<{ trainingPlan: TrainingPlan }>()
);

export const getFootballTrainingPlans = createAction(
    '[Football training plans] Get Football training plans',
    props<{ pageEvent: PageEvent }>()
);

export const loadFootballTrainingPlans = createAction(
    '[Football training plans] Get Football training plans success',
    props<{ plans: TrainingPlan[] }>()
);

export const loadFootballTrainingPlansFailure = createAction('[Football training plans] Get Football training plans failure');
