import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansTableListContainerComponent } from './containers/plans-table-list-container/plans-table-list-container.component';

@NgModule({
  declarations: [PlansTableListContainerComponent],
  imports: [CommonModule, PlansRoutingModule],
})
export class PlansModule {}
