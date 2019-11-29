import { Injectable } from '@angular/core';
import { DocumentSnapshot, DocumentSnapshotExists } from '@angular/fire/firestore';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { PlanConfigurationService } from '../../../../shared/services/plan-configuration/plan-configuration.service';
import { FootballPlanConfiguration } from '../../../../shared/types/plan-configuration.types';
import {
  getFootballConfigurations,
  loadFootballConfigurations,
  loadFootballConfigurationsFailure,
} from './football-plan-configuration.actions';

@Injectable()
export class FootballPlanConfigurationEffects {
  loadFootballConfiguration$ = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(getFootballConfigurations.type),
        switchMap((action: { configurationType: string }) => {
          return this.service.getPlanConfigurationByFeature(action.configurationType).pipe(
            map(
              (response: DocumentSnapshotExists<FootballPlanConfiguration>): Action => {
                return loadFootballConfigurations({ configuration: response.data() });
              }
            ),
            catchError(() => of(loadFootballConfigurationsFailure()))
          );
        })
      )
  );
  constructor(private actions$: Actions, private readonly service: PlanConfigurationService) {}
}
