import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlanConfigurationService } from '../../../../shared/services/plan-configuration/plan-configuration.service';
import { FootballPlanConfigurationEffects } from './football-plan-configuration.effects';
import createSpy = jasmine.createSpy;

describe('FootballPlanConfigurationEffects', () => {
  let actions$: Observable<any>;
  let effects: FootballPlanConfigurationEffects;
  const mockPlanConfigurationservice = {
    getPlanConfigurationByFeature: createSpy('getPlanConfigurationByFeature').and.callThrough(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FootballPlanConfigurationEffects,
        provideMockActions(() => actions$),
        { provide: PlanConfigurationService, mockValue: mockPlanConfigurationservice },
      ],
    });

    effects = TestBed.get<FootballPlanConfigurationEffects>(FootballPlanConfigurationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
