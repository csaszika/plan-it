import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { componentTestingSetup } from 'angular-unit-component-driver';

import { AppComponent } from './app.component';
import { AppComponentDriver } from './app.component.driver';
import { TranslateServiceStub } from './test-util/stubs/translate.service.stub';

const componentSetup = (): AppComponentDriver => {
  return componentTestingSetup({
    componentClass: AppComponent,
    driver: AppComponentDriver,
    imports: [RouterTestingModule],
    providers: [{ provide: TranslateService, useClass: TranslateServiceStub }],
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
