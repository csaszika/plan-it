import { Component, OnInit } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';

import { FootballPlanForm } from './football-plan.form';

@Component({
  selector: 'pi-football-plan',
  templateUrl: './football-plan.component.html',
  styleUrls: ['./football-plan.component.scss'],
})
export class FootballPlanComponent implements OnInit {
  readonly levels = [1, 2, 3, 4, 5];
  readonly ageClasses = ['U7', 'U10', 'U13', 'U15', 'U20'];

  readonly footballForm: FootballPlanForm = new FootballPlanForm();

  constructor() {}

  ngOnInit() {
    this.footballForm.valueChanges
      .pipe(
        debounceTime(200),
        map((form) => console.log(form))
      )
      .subscribe();
  }
}
