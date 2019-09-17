import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

import { CreatablePlanListComponent } from './containers/createable-plan-list/creatable-plan-list.component';
import { CreatePlanRoutingModule } from './create-plan-routing.module';

@NgModule({
  declarations: [CreatablePlanListComponent],
  imports: [CommonModule, CreatePlanRoutingModule, MatCardModule, TranslateModule],
})
export class CreatePlanModule {}
