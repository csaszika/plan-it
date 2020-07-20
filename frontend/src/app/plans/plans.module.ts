import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavigationCardsModule } from '../shared/navigation-cards/navigation-cards.module';
import { PlansTableListContainerComponent } from './containers/plans-table-list-container/plans-table-list-container.component';
import { PlansRoutingModule } from './plans-routing.module';

@NgModule({
    declarations: [PlansTableListContainerComponent],
    imports: [CommonModule, PlansRoutingModule, NavigationCardsModule],
})
export class PlansModule {}
