import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCardsModule } from '@plan-it/ui-components/navigation-cards';

import { CreatablePlanListRoutingModule } from './creatable-plan-list-routing.module';
import { CreatablePlanListComponent } from './creatable-plan-list.component';

@NgModule({
    imports: [CommonModule, CreatablePlanListRoutingModule, NavigationCardsModule],
    declarations: [CreatablePlanListComponent],
})
export class CreatablePlanListModule {}
