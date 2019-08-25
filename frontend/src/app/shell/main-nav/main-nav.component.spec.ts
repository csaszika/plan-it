import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { MockModule } from 'ng-mocks';

import { MainNavComponent } from './main-nav.component';
import { MainNavComponentDriver } from './main-nav.component.driver';

const componentSetup = (): MainNavComponentDriver => {
  return componentTestingSetup({
    componentClass: MainNavComponent,
    driver: MainNavComponentDriver,
    imports: [
      RouterTestingModule,
      MockModule(MatButtonModule),
      MockModule(MatIconModule),
      MockModule(MatListModule),
      MockModule(MatSidenavModule),
      MockModule(MatToolbarModule),
    ],
  });
};

describe('MainNavComponent', () => {
  let driver: MainNavComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    When(() => {
      driver.detectChanges();
    });

    Then('should be created', () => {
      expect(driver.componentInstance).toBeTruthy();
    });
  });

  describe('Events', () => {
    When(() => {
      driver.detectChanges();
    });

    Then('should be created', () => {
      expect(driver.componentInstance).toBeTruthy();
      expect(driver.routerOutlet).toBeTruthy();
    });
  });
});
