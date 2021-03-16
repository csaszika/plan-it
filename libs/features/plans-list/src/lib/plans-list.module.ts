import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCardsModule } from '@plan-it/ui-components/navigation-cards';

import { PlansListComponent } from './plans-list.component';
import { PlansListRoutingModule } from './plans-list-routing.module';

@NgModule({
    imports: [CommonModule, PlansListRoutingModule, NavigationCardsModule],
    declarations: [PlansListComponent],
})
export class PlansListModule {}
