import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

import { CreateSportPlanForm } from './create-sport-plan.form';

@Component({
  selector: 'pi-create-sport-plan',
  templateUrl: './create-sport-plan.component.html',
  styleUrls: ['./create-sport-plan.component.scss'],
})
export class CreateSportPlanComponent implements OnInit {
  readonly levels = [1, 2, 3, 4, 5];
  readonly sportTypes = ['Football', 'Basketball', 'Gym'];
  createFormGroup: CreateSportPlanForm = new CreateSportPlanForm();
  constructor() {}

  ngOnInit(): void {
    this.createFormGroup.valueChanges.pipe(debounceTime(50)).subscribe((form) => console.log(form));
  }
}
