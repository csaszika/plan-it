import { componentTestingSetup } from 'angular-unit-component-driver';
import { MainNavComponent } from './main-nav.component';
import { MainNavComponentDriver } from './main-nav.component.driver';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MockModule } from 'ng-mocks';
import { RouterTestingModule } from '@angular/router/testing';

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
