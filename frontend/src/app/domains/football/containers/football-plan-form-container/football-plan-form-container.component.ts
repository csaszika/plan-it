import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FormGroupDirective } from '@angular/forms';
import { MatVerticalStepper } from '@angular/material/stepper';
import { select, Store } from '@ngrx/store';

import { TrainingPlansService } from '../../../../shared/services/training-plans/training-plans.service';
import { PlanConfigurationType } from '../../../../shared/types/plan-configuration.types';
import { TrainingPlanId } from '../../../../shared/types/training-plan.types';
import { FootballState } from '../../ngrx';
import { getFootballConfigurations } from '../../ngrx/plan-configurations/football-plan-configuration.actions';
import {
  selectFootballPlanAgeClasses,
  selectFootballPlanLevels,
} from '../../ngrx/plan-configurations/football-plan-configuration.selectors';
import { FootballPlanForm } from './football-plan.form';

@Component({
  selector: 'pi-football-plan',
  templateUrl: './football-plan-form-container.component.html',
  styleUrls: ['./football-plan-form-container.component.scss'],
})
export class FootballPlanFormContainerComponent implements OnInit {
  /* tslint:disable:no-magic-numbers */
  readonly levels$ = this.store.pipe(select(selectFootballPlanLevels));
  /* tslint:enable:no-magic-numbers */
  readonly ageClasses$ = this.store.pipe(select(selectFootballPlanAgeClasses));
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
