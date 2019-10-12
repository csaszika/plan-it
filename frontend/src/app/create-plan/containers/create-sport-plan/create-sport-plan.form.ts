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
  readonly specialDetailsFormControlKey = 'specialDetails';
  constructor() {
    super({
      name: new FormControl('', [Validators.required, Validators.maxLength(planNameMaxLength)]),
      sportType: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.maxLength(planDetailsDescriptionMaxLength)]),
      goal: new FormControl('', [Validators.required, Validators.maxLength(planDetailsGoalMaxLength)]),
      steps: new FormArray([], Validators.minLength(1)),
    });
  }

  addSpecialDetailsFormControl(specialFormGroup: FormGroup): void {
    this.removeControl(this.specialDetailsFormControlKey);
    this.addControl(this.specialDetailsFormControlKey, specialFormGroup);
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
