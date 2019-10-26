import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';

import { RoutePaths } from '../../create-plan.routes';
import { CreatablePlanListComponent } from './creatable-plan-list.component';
import { CreatablePlanListComponentDriver } from './creatable-plan-list.component.driver';

const componentSetup = (): CreatablePlanListComponentDriver => {
  return componentTestingSetup({
    componentClass: CreatablePlanListComponent,
    driver: CreatablePlanListComponentDriver,
    imports: [NoopAnimationsModule, RouterTestingModule],
    declarations: [MockComponent(MatCard), MockComponent(MatCardTitle), MockComponent(MatCardSubtitle)],
  });
};

describe('CreatablePlanListComponent', () => {
  let driver: CreatablePlanListComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    Given(() => {
      driver.detectChanges();
    });

    Then('should create', () => {
      expect(driver.componentInstance).toBeTruthy();
    });

    Then('could navigate to route', () => {
      expect(driver.firstPlanCard.getAttribute('ng-reflect-router-link')).toEqual(RoutePaths.CREATE_FOOTBALL_PLAN);
    });
  });
});
