import { RouterTestingModule } from '@angular/router/testing';
import { componentTestingSetup } from 'angular-unit-component-driver';

import { AppComponent } from './app.component';
import { AppComponentDriver } from './app.component.driver';

const componentSetup = (): AppComponentDriver => {
  return componentTestingSetup({
    componentClass: AppComponent,
    driver: AppComponentDriver,
    imports: [RouterTestingModule],
  });
};

describe('AppComponent', () => {
  let driver: AppComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    Given(() => {});

    When(() => {
      driver.detectChanges();
    });

    Then('should be created', () => {
      expect(driver.componentInstance).toBeTruthy();
      expect(driver.routerOutlet).toBeTruthy();
    });
  });
});
