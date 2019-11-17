import { componentTestingSetup } from 'angular-unit-component-driver';
import { MockComponent } from 'ng-mocks';

import { RoutePaths } from '../../create-plan.routes';
import { CreatablePlanListContainerComponent } from './creatable-plan-list-container.component';
import { CreatablePlanListComponentDriver } from './creatable-plan-list.component.driver';
import { NavigationCardsComponent } from '../../../shared/navigation-cards/navigation-cards/navigation-cards.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const componentSetup = (): CreatablePlanListComponentDriver => {
  return componentTestingSetup({
    componentClass: CreatablePlanListContainerComponent,
    driver: CreatablePlanListComponentDriver,
    imports: [NoopAnimationsModule],
    declarations: [MockComponent(NavigationCardsComponent)],
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
  });
});
