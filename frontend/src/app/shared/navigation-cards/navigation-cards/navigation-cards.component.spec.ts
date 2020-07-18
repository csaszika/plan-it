import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { MockComponent } from 'ng-mocks';

import { CreatePlanRoutes } from '../../routes/create-plan.routes';
import { NavigationCardsComponent } from './navigation-cards.component';
import { NavigationCardsComponentDriver } from './navigation-cards.driver';

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
          url: CreatePlanRoutes.CREATE_FOOTBALL_PLAN,
        },
        {
          title: 'Agility',
          description: 'Create your own agility training',
          url: CreatePlanRoutes.CREATE_AGILITY_PLAN,
        },
        {
          title: 'Smart goal',
          description: 'Create your smart goal',
          url: CreatePlanRoutes.CREATE_SMART_GOAL,
        },
      ];
      driver.detectChanges();
    });

    Then('should create', () => {
      expect(driver.componentInstance).toBeTruthy();
    });

    Then('could navigate to route', () => {
      expect(driver.firstPlanCard.getAttribute('ng-reflect-router-link')).toEqual(CreatePlanRoutes.CREATE_FOOTBALL_PLAN);
    });
  });
});
