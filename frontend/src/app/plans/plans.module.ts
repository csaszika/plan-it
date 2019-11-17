import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansTableListContainerComponent } from './containers/plans-table-list-container/plans-table-list-container.component';
import { NavigationCardsModule } from '../shared/navigation-cards/navigation-cards.module';

@NgModule({
  declarations: [PlansTableListContainerComponent],
  imports: [CommonModule, PlansRoutingModule, NavigationCardsModule],
})
export class PlansModule {}
