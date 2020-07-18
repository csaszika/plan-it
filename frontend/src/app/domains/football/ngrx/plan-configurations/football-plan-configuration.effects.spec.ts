import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { PlanConfigurationService } from '../../../../shared/services/plan-configuration/plan-configuration.service';
import { getFootballConfigurations, loadFootballConfigurations } from './football-plan-configuration.actions';
import { FootballPlanConfigurationEffects } from './football-plan-configuration.effects';

describe('FootballPlanConfigurationEffects', () => {
  let actions$: Observable<any>;
  let effects: FootballPlanConfigurationEffects;

  const mockPlanConfigurationService = {
    getPlanConfigurationByFeature$: jasmine.createSpy('getPlanConfigurationByFeature$'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FootballPlanConfigurationEffects,
        { provide: PlanConfigurationService, useValue: mockPlanConfigurationService },
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(FootballPlanConfigurationEffects);
  }));

  const configurationData = {
    ageClasses: ['U7', 'U8', 'U9'],
    // tslint:disable-next-line:no-magic-numbers
    levels: [1, 2, 3]
  };

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should load football configuration', () => {
    const action = getFootballConfigurations;
    const result = loadFootballConfigurations({ configuration: configurationData });

    actions$ = of(action);
    const response$ = cold('-a|', { a: { data: () => configurationData} });
    const expected$ = cold('-b|', { b: result });

    mockPlanConfigurationService.getPlanConfigurationByFeature$.and.returnValue(response$);

    expect(effects.loadFootballConfiguration$).toBeObservable(expected$);
  });
});
