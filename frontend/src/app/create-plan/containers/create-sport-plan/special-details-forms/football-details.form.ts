import { FormControl, FormGroup, Validators } from '@angular/forms';

export class FootballDetailsForm extends FormGroup {
  constructor() {
    super({
      level: new FormControl('', [Validators.required]),
      // TODO tbd values (U7-23 + mature)
      ageClass: new FormControl('', [Validators.required]),
    });
  }
}
