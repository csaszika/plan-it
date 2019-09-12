import { componentTestingSetup } from 'angular-unit-component-driver';
import { CreatablePlanListComponent } from './creatable-plan-list.component';
import { CreatablePlanListComponentDriver } from './creatable-plan-list.component.driver';
import { MockModule } from 'ng-mocks';
import { MatCardModule } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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

    Then(() => {
      expect(driver.componentInstance).toBeTruthy();
    });
  });

  describe('Public methods', () => {
    const mockUrl = 'url';
    Given(() => {
      driver.detectChanges();
      spyOn(window, 'alert');
    });

    When(() => {
      driver.componentInstance.onClickPlanType(mockUrl);
    });

    Then(() => {
      expect(window.alert).toHaveBeenCalledWith(mockUrl);
    });
  });

  describe('Events', () => {
    Given(() => {
      driver.detectChanges();
      spyOn(driver.componentInstance, 'onClickPlanType');
    });

    When(() => {
      driver.firstPlanCard.click();
    });

    Then(() => {
      expect(driver.componentInstance.onClickPlanType).toHaveBeenCalledWith('sport');
    });
  });
});
