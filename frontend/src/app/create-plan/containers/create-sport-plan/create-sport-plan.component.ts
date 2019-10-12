import { Component, OnInit } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';

import { CreateSportPlanForm } from './create-sport-plan.form';
import { FootballDetailsForm } from './special-details-forms/football-details.form';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'pi-create-sport-plan',
  templateUrl: './create-sport-plan.component.html',
  styleUrls: ['./create-sport-plan.component.scss'],
})
export class CreateSportPlanComponent implements OnInit {
  readonly levels = [1, 2, 3, 4, 5];
  readonly ageClassesForFootball = ['U7', 'U10', 'U13', 'U15', 'U20'];
  readonly sportTypes = ['Football', 'Agility'];
  readonly sportTypeToFormControl: { [index: string]: FormGroup } = {
    Football: new FootballDetailsForm(),
    // TODO create Agility specific form
    Agility: new FootballDetailsForm(),
  };

  createFormGroup: CreateSportPlanForm = new CreateSportPlanForm();

  ngOnInit(): void {
    this.createFormGroup.valueChanges
      .pipe(
        debounceTime(200),
        map((form) => console.log(form))
      )
      .subscribe();
    this.createFormGroup.controls.sportType.valueChanges
      .pipe(map((sportType: string) => this.createFormGroup.addSpecialDetailsFormControl(this.sportTypeToFormControl[sportType])))
      .subscribe();
  }
}
