import { ComponentDriver } from 'angular-unit-component-driver';

import { FootballPlanComponent } from './football-plan.component';

export class FootballPlanComponentDriver extends ComponentDriver<FootballPlanComponent> {
  get saveButton(): HTMLButtonElement {
    return this.querySelector('button[name=save-plan]');
  }
}
