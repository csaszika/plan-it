import { componentTestingSetup } from 'angular-unit-component-driver';

import { DashboardComponent } from './dashboard.component';
import { DashboardComponentDriver } from './dashboard.component.driver';

const componentSetup = (): DashboardComponentDriver => {
  return componentTestingSetup({
    componentClass: DashboardComponent,
    driver: DashboardComponentDriver,
    imports: [],
  });
};

describe('DashboardComponent', () => {
  let driver: DashboardComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    Given(() => {});

    When(() => {
      driver.detectChanges();
    });

    Then(() => {
      expect(driver.componentInstance).toBeTruthy();
    });
  });
});
