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

import { CreateSportPlanComponent } from './containers/create-sport-plan/create-sport-plan.component';
import { CreatablePlanListComponent } from './containers/createable-plan-list/creatable-plan-list.component';
import { CreatePlanRoutingModule } from './create-plan-routing.module';
import { FootballPlanComponent } from './containers/football-plan/football-plan.component';
import { ColorPickerModule } from '../shared/components/color-picker-list/color-picker.component';

const MATERIAL_MODULES = [MatButtonModule, MatButtonToggleModule, MatCardModule, MatFormFieldModule, MatInputModule, MatStepperModule];

@NgModule({
  declarations: [CreatablePlanListComponent, CreateSportPlanComponent, FootballPlanComponent],
  imports: [CommonModule, ColorPickerModule, CreatePlanRoutingModule, ReactiveFormsModule, TranslateModule, ...MATERIAL_MODULES],
})
export class CreatePlanModule {}
