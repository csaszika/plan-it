import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FormGroupDirective } from '@angular/forms';
import { MatVerticalStepper } from '@angular/material/stepper';
import { Store, select } from '@ngrx/store';
import { fade } from '@plan-it/animations';
import { getFootballConfigurations } from '@plan-it/ngrx-actions/football-configuration';
import {
    FootballState,
    selectFootballPlanAgeClasses,
    selectFootballPlanConfigurationShowState,
    selectFootballPlanLevels,
} from '@plan-it/ngrx-store/football';
import { TrainingPlansService } from '@plan-it/training-plans-api';
import { DataLoadingError } from '@plan-it/types/common';
import { PlanConfigurationType } from '@plan-it/types/plan-configuration';
import { TrainingPlanId } from '@plan-it/types/training-plan';

import { FootballPlanForm } from './football-plan.form';

@Component({
    selector: 'pi-football-plan-form',
    templateUrl: './football-plan-editor.component.html',
    styleUrls: ['./football-plan-editor.component.scss'],
    animations: [fade],
})
export class FootballPlanEditorComponent implements OnInit {
    readonly levels$ = this.store.pipe(select(selectFootballPlanLevels));
    readonly ageClasses$ = this.store.pipe(select(selectFootballPlanAgeClasses));
    readonly dataLoadingErrorEnum = DataLoadingError;
    readonly dataLoadingError$ = this.store.pipe(select(selectFootballPlanConfigurationShowState));
    // TODO now we can create plans and then update or delete the last one
    private selectedTrainingPlanId: TrainingPlanId = 'have to come from ngrx';

    footballForm: FootballPlanForm = new FootballPlanForm();
    @ViewChild(MatVerticalStepper, { static: false }) stepper!: MatVerticalStepper;

    constructor(private readonly trainingPlansService: TrainingPlansService, private readonly store: Store<FootballState>) {}

    ngOnInit(): void {
        this.store.dispatch(getFootballConfigurations({ configurationType: PlanConfigurationType.FOOTBALL }));
    }

    savePlan(form: FormGroupDirective): void {
        this.trainingPlansService.addPlan(this.footballForm.value).then((newPlan: DocumentReference) => {
            this.selectedTrainingPlanId = newPlan.id;
            this.stepper.reset();
            form.resetForm();
        });
    }

    deletePlan(): void {
        this.trainingPlansService.deletePlan(this.selectedTrainingPlanId);
    }

    updatePlan(): void {
        this.trainingPlansService.updatePlan(this.selectedTrainingPlanId, this.footballForm.value);
    }
}
