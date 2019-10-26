import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslateModule } from '@ngx-translate/core';

import { CreatablePlanListComponent } from './containers/createable-plan-list/creatable-plan-list.component';
import { FootballPlanComponent } from './containers/football-plan/football-plan.component';
import { CreatePlanRoutingModule } from './create-plan-routing.module';

const MATERIAL_MODULES = [MatButtonModule, MatButtonToggleModule, MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule];

@NgModule({
  declarations: [CreatablePlanListComponent, FootballPlanComponent],
  imports: [CommonModule, CreatePlanRoutingModule, ReactiveFormsModule, TranslateModule, ...MATERIAL_MODULES],
})
export class CreatePlanModule {}
