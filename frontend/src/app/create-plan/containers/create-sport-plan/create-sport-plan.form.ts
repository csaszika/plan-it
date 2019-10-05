import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export const planNameMaxLength = 30;
export const planDetailsDescriptionMaxLength = 300;
export const planDetailsGoalMaxLength = 150;

export const planStepNameMaxLength = 30;
export const planStepDescriptionMaxLength = 30;

export class CreateSportPlanForm extends FormGroup {
  readonly planNameMaxLength = planNameMaxLength;
  readonly planDetailsDescriptionMaxLength = planDetailsDescriptionMaxLength;
  readonly planDetailsGoalMaxLength = planDetailsGoalMaxLength;
  readonly planStepNameMaxLength = planStepNameMaxLength;
  readonly planStepDescriptionMaxLength = planStepDescriptionMaxLength;
  constructor() {
    super({
      name: new FormControl(null, [Validators.required, Validators.maxLength(planNameMaxLength)]),
      sportType: new FormControl(null, [Validators.required]),
      details: new FormGroup({
        description: new FormControl(null, [Validators.maxLength(planDetailsDescriptionMaxLength)]),
        goal: new FormControl(null, [Validators.required, Validators.maxLength(planDetailsGoalMaxLength)]),
        level: new FormControl(null, [Validators.required]),
        // TODO tbd values (U7-23 + mature)
        ageClass: new FormControl(null, [Validators.required]),
      }),
      steps: new FormArray([], Validators.minLength(1)),
    });
  }

  addNewStep(): void {
    (this.get('steps') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.maxLength(planStepNameMaxLength)]),
        description: new FormControl(null, [Validators.maxLength(planStepDescriptionMaxLength)]),
      })
    );
    // TODO design (get info from customer)
    // 3. videoLinks?
    // 4. infoLinks? -> get more insights noooo
    // 5. files? -> get more insights
    // 6. animations? -> future, perhaps
  }
}
