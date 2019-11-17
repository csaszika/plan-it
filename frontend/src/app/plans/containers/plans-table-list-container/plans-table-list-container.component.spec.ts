import { componentTestingSetup } from 'angular-unit-component-driver';
import { MockComponent } from 'ng-mocks';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationCardsComponent } from '../../../shared/navigation-cards/navigation-cards/navigation-cards.component';
import { PlansTableListContainerComponentDriver } from './plans-table-list-container.component.driver';
import { PlansTableListContainerComponent } from './plans-table-list-container.component';

const componentSetup = (): PlansTableListContainerComponentDriver => {
  return componentTestingSetup({
    componentClass: PlansTableListContainerComponent,
    driver: PlansTableListContainerComponentDriver,
    imports: [NoopAnimationsModule],
    declarations: [MockComponent(NavigationCardsComponent)],
  });
};

describe('CreatablePlanListComponent', () => {
  let driver: PlansTableListContainerComponentDriver;

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
