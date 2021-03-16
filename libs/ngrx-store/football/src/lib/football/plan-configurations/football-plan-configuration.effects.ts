import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { FootballPlanConfiguration } from '@plan-it/types/plan-configuration';
import { PlanConfigurationService } from '@plan-it/plan-configuration-api';
import {
    getFootballConfigurations,
    loadFootballConfigurations,
    loadFootballConfigurationsFailure,
} from '@plan-it/ngrx-actions/football-configuration';

import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Injectable()
export class FootballPlanConfigurationEffects {
    loadFootballConfiguration$ = createEffect(
        (): Observable<Action> =>
            this.actions$.pipe(
                ofType(getFootballConfigurations.type),
                switchMap((action: { configurationType: string }) => {
                    return this.service.getPlanConfigurationByFeature$(action.configurationType).pipe(
                        map(
                            (response: DocumentSnapshot<FootballPlanConfiguration>): Action => {
                                return loadFootballConfigurations({ configuration: response.data() });
                            }
                        ),
                        catchError(() => of(loadFootballConfigurationsFailure()))
                    );
                })
            )
    );
    constructor(private readonly actions$: Actions, private readonly service: PlanConfigurationService) {}
}
