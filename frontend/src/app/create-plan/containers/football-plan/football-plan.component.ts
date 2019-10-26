import { Component, ViewChild } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FormGroupDirective } from '@angular/forms';
import { MatVerticalStepper } from '@angular/material/stepper';

import { TrainingPlansService } from '../../../shared/services/training-plans/training-plans.service';
import { TrainingPlanId } from '../../../shared/types/training-plan.types';
import { FootballPlanForm } from './football-plan.form';

@Component({
  selector: 'pi-football-plan',
  templateUrl: './football-plan.component.html',
  styleUrls: ['./football-plan.component.scss'],
})
export class FootballPlanComponent {
  /* tslint:disable:no-magic-numbers */
  readonly levels = [1, 2, 3, 4, 5];
  /* tslint:enable:no-magic-numbers */
  readonly ageClasses = [
    'U7',
    'U8',
    'U9',
    'U10',
    'U11',
    'U12',
    'U13',
    'U14',
    'U15',
    'U16',
    'U17',
    'U18',
    'U19',
    'U20',
    'U21',
    'U22',
    'U23',
    'Adult', // TODO translate Adult
  ];
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
