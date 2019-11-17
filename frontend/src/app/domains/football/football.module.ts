import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

import { FootballRoutingModule } from './football-routing.module';
import { FootballPlanFormContainerComponent } from './containers/football-plan/football-plan-form-container.component';

const MATERIAL_MODULES = [MatButtonModule, MatCardModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatStepperModule];

@NgModule({
  declarations: [FootballPlanFormContainerComponent],
  imports: [CommonModule, FootballRoutingModule, ReactiveFormsModule, TranslateModule, ...MATERIAL_MODULES],
})
export class FootballModule {}
