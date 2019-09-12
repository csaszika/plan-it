import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CreatePlanRoutingModule } from './create-plan-routing.module';
import { CreatablePlanListComponent } from './containers/createable-plan-list/creatable-plan-list.component';

@NgModule({
  declarations: [CreatablePlanListComponent],
  imports: [CommonModule, CreatePlanRoutingModule, MatCardModule],
})
export class CreatePlanModule {}
