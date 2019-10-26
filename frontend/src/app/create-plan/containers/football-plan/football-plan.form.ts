import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export const planNameMaxLength = 30;
export const planDetailsDescriptionMaxLength = 300;
export const planDetailsGoalMaxLength = 150;

export const planStepNameMaxLength = 30;
export const planStepDescriptionMaxLength = 30;

export class FootballPlanForm extends FormGroup {
  readonly planNameMaxLength = planNameMaxLength;
  readonly planDetailsDescriptionMaxLength = planDetailsDescriptionMaxLength;
  readonly planDetailsGoalMaxLength = planDetailsGoalMaxLength;
  readonly planStepNameMaxLength = planStepNameMaxLength;
  readonly planStepDescriptionMaxLength = planStepDescriptionMaxLength;
  constructor() {
    super({
      name: new FormControl('', [Validators.required, Validators.maxLength(planNameMaxLength)]),
      description: new FormControl('', [Validators.maxLength(planDetailsDescriptionMaxLength)]),
      goal: new FormControl('', [Validators.required, Validators.maxLength(planDetailsGoalMaxLength)]),
      level: new FormControl('', [Validators.required]),
      // TODO tbd values (U7-23 + mature)
      ageClass: new FormControl('', [Validators.required]),
      steps: new FormArray([], Validators.required),
    });
  }

  addNewStep(): void {
    (this.get('steps') as FormArray).push(
      new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(planStepNameMaxLength)]),
        description: new FormControl('', [Validators.maxLength(planStepDescriptionMaxLength)]),
      })
    );
    // TODO design (get info from customer)
    // 3. videoLinks?
    // 4. infoLinks? -> get more insights noooo
    // 5. files? -> get more insights
    // 6. animations? -> future, perhaps
  }
}
