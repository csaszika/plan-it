import { componentTestingSetup } from 'angular-unit-component-driver';
import { MockComponent } from 'ng-mocks';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationCardsComponent } from './navigation-cards.component';
import { NavigationCardsComponentDriver } from './navigation-cards.driver';
import { RoutePaths } from '../../../create-plan/create-plan.routes';
import { PlanGroup } from '../../../create-plan/types/plan-group.enums';

const componentSetup = (): NavigationCardsComponentDriver => {
  return componentTestingSetup({
    componentClass: NavigationCardsComponent,
    driver: NavigationCardsComponentDriver,
    imports: [RouterTestingModule],
    declarations: [MockComponent(MatCard), MockComponent(MatCardTitle), MockComponent(MatCardSubtitle)],
  });
};

describe('NavigationCardsComponent', () => {
  let driver: NavigationCardsComponentDriver;

  Given(() => {
    driver = componentSetup();
  });

  describe('Initializing', () => {
    Given(() => {
      driver.componentInstance.navCardItems = [
        {
          title: 'Football',
          description: 'Create your own football training',
          url: RoutePaths.CREATE_FOOTBALL_PLAN,
        },
        {
          title: 'Agility',
          description: 'Create your own agility training',
          url: RoutePaths.CREATE_AGILITY_PLAN,
        },
        {
          title: 'Smart goal',
          description: 'Create your smart goal',
          url: RoutePaths.CREATE_SMART_GOAL,
        },
      ];
      driver.detectChanges();
    });

    Then('should create', () => {
      expect(driver.componentInstance).toBeTruthy();
    });

    Then('could navigate to route', () => {
      expect(driver.firstPlanCard.getAttribute('ng-reflect-router-link')).toEqual(RoutePaths.CREATE_FOOTBALL_PLAN);
    });
  });
});
