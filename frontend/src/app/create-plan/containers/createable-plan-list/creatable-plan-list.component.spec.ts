import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { MockModule } from 'ng-mocks';

import { CreatablePlanListComponent } from './creatable-plan-list.component';
import { CreatablePlanListComponentDriver } from './creatable-plan-list.component.driver';
import { RoutePaths } from '../../create-plan.routes';

const componentSetup = (): CreatablePlanListComponentDriver => {
  return componentTestingSetup({
    componentClass: CreatablePlanListComponent,
    driver: CreatablePlanListComponentDriver,
    imports: [NoopAnimationsModule, MockModule(MatCardModule)],
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
      expect(driver.firstPlanCard.getAttribute('href')).toEqual(RoutePaths.CREATE_SPORT_PLAN);
    });
  });
});
