import { cold } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { TestBed, waitForAsync } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { PlanConfigurationService } from '@plan-it/plan-configuration-api';
import { getFootballConfigurations, loadFootballConfigurations } from '@plan-it/ngrx-actions/football-configuration';

import { FootballPlanConfigurationEffects } from './football-plan-configuration.effects';

describe('FootballPlanConfigurationEffects', () => {
    let actions$: Observable<Action>;
    let effects: FootballPlanConfigurationEffects;

    const mockPlanConfigurationService = {
        getPlanConfigurationByFeature$: jasmine.createSpy('getPlanConfigurationByFeature$'),
    };

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                providers: [
                    FootballPlanConfigurationEffects,
                    { provide: PlanConfigurationService, useValue: mockPlanConfigurationService },
                    provideMockActions(() => actions$),
                ],
            });

            effects = TestBed.inject(FootballPlanConfigurationEffects);
        })
    );

    const configurationData = {
        ageClasses: ['U7', 'U8', 'U9'],
        levels: [1, 2, 3],
    };

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('should load football configuration', () => {
        const action = getFootballConfigurations;
        const result = loadFootballConfigurations({ configuration: configurationData });

        actions$ = of(action);
        const response$ = cold('-a|', { a: { data: () => configurationData } });
        const expected$ = cold('-b|', { b: result });

        mockPlanConfigurationService.getPlanConfigurationByFeature$.and.returnValue(response$);

        expect(effects.loadFootballConfiguration$).toBeObservable(expected$);
    });
});
