import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { RoutePaths } from '../create-plan.routes';

@Component({
  selector: 'pi-createable-plan-list',
  templateUrl: './creatable-plan-list.component.html',
  styleUrls: ['./creatable-plan-list.component.scss'],
})
export class CreatablePlanListComponent implements OnInit {
  @Input() planTypes$!: Observable<Array<{ title: string; description: string; url: string }>>;

  ngOnInit(): void {
    const loadingTime = 2000;
    this.planTypes$ = of([
      {
        title: 'Sport',
        description: 'Create your own training plan',
        url: RoutePaths.CREATE_SPORT_PLAN,
      },
      {
        title: 'Smart goal',
        description: 'Create your smart goal',
        url: RoutePaths.CREATE_SMART_GOAL,
      },
    ]).pipe(delay(loadingTime));
  }

  onClickPlanType(url: string): void {
    alert(url);
  }
}
