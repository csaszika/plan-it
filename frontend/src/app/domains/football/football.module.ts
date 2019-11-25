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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FootballRoutingModule } from './football-routing.module';
import { FootballPlanFormContainerComponent } from './containers/football-plan-form-container/football-plan-form-container.component';
import { FootballPlansContainerComponent } from './containers/football-plans-container/football-plans-container.component';

const MATERIAL_MODULES = [MatButtonModule, MatCardModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatStepperModule];

@NgModule({
  declarations: [FootballPlanFormContainerComponent, FootballPlansContainerComponent],
  imports: [
    CommonModule,
    FootballRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    ...MATERIAL_MODULES,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class FootballModule {}
