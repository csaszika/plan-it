import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { TestBed, waitForAsync } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import {
    deleteFootballTrainingPlan,
    deleteFootballTrainingPlanFailed,
    deleteFootballTrainingPlanSuccess,
    getFootballTrainingPlans,
    loadFootballTrainingPlans,
    loadFootballTrainingPlansFailed,
} from '@plan-it/ngrx-actions/football-training-plans';
import { TrainingPlansService } from '@plan-it/training-plans-api';

import { FootballTrainingPlansEffects } from './football-training-plans.effects';

describe('FootballTrainingPlansEffects', () => {
    let actions$: Observable<Action>;
    let effects: FootballTrainingPlansEffects;

    const service = {
        getPlans$: jasmine.createSpy('getPlans$'),
        deletePlan$: jasmine.createSpy('deletePlan$'),
    };

    const plan = {
        id: 'id',
        ageClass: 'U18',
        description: 'desc',
        goal: 'goal',
        level: 4,
        name: 'name',
        steps: [],
    };

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                providers: [
                    FootballTrainingPlansEffects,
                    { provide: TrainingPlansService, useValue: service },
                    provideMockActions(() => actions$),
                ],
            });

            effects = TestBed.inject(FootballTrainingPlansEffects);
        })
    );

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('should load football plans', () => {
        const action = getFootballTrainingPlans;
        const result = loadFootballTrainingPlans({ plans: [plan] });

        actions$ = of(action);
        const response$ = cold('-a|', { a: [plan] });
        const expected$ = cold('-b|', { b: result });

        service.getPlans$.and.returnValue(response$);

        expect(effects.loadTrainingPlans$).toBeObservable(expected$);
    });

    it('should load football plans if failed', () => {
        const action = getFootballTrainingPlans;
        const result = loadFootballTrainingPlansFailed();

        actions$ = hot('-a', { a: action });
        const response$ = cold('-#');
        const expected$ = cold('--b', { b: result });

        service.getPlans$.and.returnValue(response$);

        expect(effects.loadTrainingPlans$).toBeObservable(expected$);
    });

    it('should delete football plan', () => {
        const action = deleteFootballTrainingPlan({ planId: plan.id });
        const result = deleteFootballTrainingPlanSuccess({ planId: plan.id });

        actions$ = of(action);
        const response$ = cold('-a|', { a: [plan] });
        const expected$ = cold('-b|', { b: result });

        service.deletePlan$.and.returnValue(response$);

        expect(effects.deleteTrainingPlans$).toBeObservable(expected$);
    });

    it('should delete football plan failed', () => {
        const action = deleteFootballTrainingPlan({ planId: plan.id });
        const result = deleteFootballTrainingPlanFailed();

        actions$ = hot('-a', { a: action });
        const response$ = cold('-#');
        const expected$ = cold('--b', { b: result });

        service.deletePlan$.and.returnValue(response$);

        expect(effects.deleteTrainingPlans$).toBeObservable(expected$);
    });
});
