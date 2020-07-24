import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { FootballPlanFormContainerComponent } from './containers/football-plan-form-container/football-plan-form-container.component';
import { FootballPlansContainer } from './containers/football-plans-container/football-plans-container.component';
import { FootballRoutingModule } from './football-routing.module';
import { footballFeatureKey, reducers } from './ngrx';
import { FootballPlanConfigurationEffects } from './ngrx/plan-configurations/football-plan-configuration.effects';

const MATERIAL_MODULES = [MatButtonModule, MatCardModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatStepperModule];

@NgModule({
    declarations: [FootballPlanFormContainerComponent, FootballPlansContainer],
    imports: [
        CommonModule,
        FootballRoutingModule,
        ReactiveFormsModule,
        TranslateModule,
        ...MATERIAL_MODULES,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        StoreModule.forFeature(footballFeatureKey, reducers),
        EffectsModule.forFeature([FootballPlanConfigurationEffects]),
        MatProgressBarModule,
        MatIconModule,
    ],
})
export class FootballModule {}
