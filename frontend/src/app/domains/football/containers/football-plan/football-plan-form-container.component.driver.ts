import { ComponentDriver } from 'angular-unit-component-driver';

import { FootballPlanFormContainerComponent } from './football-plan-form-container.component';

export class FootballPlanFormContainerComponentDriver extends ComponentDriver<FootballPlanFormContainerComponent> {
  get saveButton(): HTMLButtonElement {
    return this.querySelector('button[name=save-plan]');
  }
}
