import { ComponentDriver } from 'angular-unit-component-driver';
import { CreatablePlanListComponent } from './creatable-plan-list.component';

export class CreatablePlanListComponentDriver extends ComponentDriver<CreatablePlanListComponent> {
  get firstPlanCard(): HTMLElement {
    return this.querySelector('mat-card');
  }
}
