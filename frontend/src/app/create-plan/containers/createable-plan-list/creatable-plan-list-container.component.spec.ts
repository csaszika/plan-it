import { componentTestingSetup } from 'angular-unit-component-driver';
import { MockComponent } from 'ng-mocks';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CreatablePlanListContainerComponent } from './creatable-plan-list-container.component';
import { CreatablePlanListContainerComponentDriver } from './creatable-plan-list-container.component.driver';
import { NavigationCardsComponent } from '../../../shared/navigation-cards/navigation-cards/navigation-cards.component';

const componentSetup = (): CreatablePlanListContainerComponentDriver => {
  return componentTestingSetup({
    componentClass: CreatablePlanListContainerComponent,
    driver: CreatablePlanListContainerComponentDriver,
    imports: [NoopAnimationsModule],
    declarations: [MockComponent(NavigationCardsComponent)],
  });
};

describe('CreatablePlanListComponent', () => {
  let driver: CreatablePlanListContainerComponentDriver;

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
