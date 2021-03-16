import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FootballStoreModule } from '@plan-it/ngrx-store/football';

import { FootballPlanEditorComponent } from './football-plan-editor/football-plan-editor.component';
import { FootballPlansRoutingModule } from './football-plans-routing.module';
import { FootballPlansTableComponent } from './football-plan-table/football-plans-table.component';

@NgModule({
    imports: [
        CommonModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatCardModule,
        MatButtonModule,
        MatProgressBarModule,
        MatPaginatorModule,
        MatIconModule,
        MatTableModule,
        FootballPlansRoutingModule,
        FootballStoreModule,
        ReactiveFormsModule,
        TranslateModule,
    ],
    declarations: [FootballPlanEditorComponent, FootballPlansTableComponent],
})
export class FootballPlansModule {}
