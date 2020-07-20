import { ComponentDriver } from 'angular-unit-component-driver';

import { NavigationCardsComponent } from './navigation-cards.component';

export class NavigationCardsComponentDriver extends ComponentDriver<NavigationCardsComponent> {
    get firstPlanCard(): HTMLElement {
        return this.querySelector('mat-card');
    }
}
