import { Component, ViewChild } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { MatVerticalStepper } from '@angular/material/stepper';

import { FootballPlanForm } from './football-plan.form';
import { TrainingPlansService } from '../../../shared/services/training-plans/training-plans.service';
import { FormGroupDirective } from '@angular/forms';
import { TrainingPlanId } from '../../../shared/types/training-plan.types';

@Component({
  selector: 'pi-football-plan',
  templateUrl: './football-plan.component.html',
  styleUrls: ['./football-plan.component.scss'],
})
export class FootballPlanComponent {
  readonly levels = [1, 2, 3, 4, 5];
  readonly ageClasses = ['U7', 'U10', 'U13', 'U15', 'U20'];
  // TODO now we can create plans and then update or delete the last one
  private selectedTrainingPlanId: TrainingPlanId = 'have to come from store';
  footballForm: FootballPlanForm = new FootballPlanForm();

  @ViewChild(MatVerticalStepper, { static: false }) stepper!: MatVerticalStepper;

  constructor(private readonly trainingPlansService: TrainingPlansService) {}

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
