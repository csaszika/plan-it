import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ReactiveFormsModule } from '@angular/forms';
import { CreatablePlanListComponent } from './containers/createable-plan-list/creatable-plan-list.component';
import { CreatePlanRoutingModule } from './create-plan-routing.module';
import { CreateSportPlanComponent } from './containers/create-sport-plan/create-sport-plan.component';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatButtonModule, MatButtonToggleModule, MatCardModule, MatFormFieldModule, MatInputModule];

@NgModule({
  declarations: [CreatablePlanListComponent, CreateSportPlanComponent],
  imports: [CommonModule, CreatePlanRoutingModule, ReactiveFormsModule, TranslateModule, ...MATERIAL_MODULES],
})
export class CreatePlanModule {}
