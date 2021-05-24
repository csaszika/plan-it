import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TrainingPlan, TrainingPlanId } from '@plan-it/types/training-plan';
import { TrainingPlansService } from '@plan-it/training-plans-api';
import { PageEvent } from '@angular/material/paginator';
import {
    deleteFootballTrainingPlan,
    deleteFootballTrainingPlanFailed,
    deleteFootballTrainingPlanSuccess,
    getFootballTrainingPlans,
    loadFootballTrainingPlans,
    loadFootballTrainingPlansFailed,
} from '@plan-it/ngrx-actions/football-training-plans';

@Injectable()
export class FootballTrainingPlansEffects {
    loadTrainingPlans$ = createEffect(
        (): Observable<Action> =>
            this.actions$.pipe(
                ofType(getFootballTrainingPlans.type),
                switchMap((action: { pageEvent: PageEvent }) => {
                    return this.service.getPlans$(action.pageEvent).pipe(
                        map(
                            (plans: TrainingPlan[]): Action => {
                                return loadFootballTrainingPlans({ plans });
                            }
                        ),
                        catchError(() => of(loadFootballTrainingPlansFailed()))
                    );
                })
            )
    );

    deleteTrainingPlans$ = createEffect(
        (): Observable<Action> =>
            this.actions$.pipe(
                ofType(deleteFootballTrainingPlan.type),
                exhaustMap((action: { planId: TrainingPlanId }) => {
                    return this.service.deletePlan$(action.planId).pipe(
                        map(
                            (): Action => {
                                return deleteFootballTrainingPlanSuccess({ planId: action.planId });
                            }
                        ),
                        catchError(() => of(deleteFootballTrainingPlanFailed()))
                    );
                })
            )
    );

    constructor(private readonly actions$: Actions, private readonly service: TrainingPlansService) {}
}
