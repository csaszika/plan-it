import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { cardListAnimation } from '../../../shared/animations/card-list.animations';
import { RoutePaths } from '../../create-plan.routes';
import { PlanGroup } from '../../types/plan-group.enums';

@Component({
  selector: 'pi-creatable-plan-list',
  templateUrl: './creatable-plan-list.component.html',
  styleUrls: ['./creatable-plan-list.component.scss'],
  animations: [cardListAnimation],
})
export class CreatablePlanListComponent implements OnInit {
  planTypes$!: Observable<Array<{ title: string; description: string; url: string }>>;

  ngOnInit(): void {
    this.planTypes$ = of([
      {
        title: 'Football',
        description: 'Create your own football training',
        type: PlanGroup.SPORT,
        url: RoutePaths.CREATE_FOOTBALL_PLAN,
      },
      {
        title: 'Agility',
        description: 'Create your own agility training',
        type: PlanGroup.SPORT,
        url: RoutePaths.CREATE_AGILITY_PLAN,
      },
      {
        title: 'Sport',
        description: 'Create your own training plan',
        type: PlanGroup.SPORT,
        url: RoutePaths.CREATE_SPORT_PLAN,
      },
      {
        title: 'Smart goal',
        description: 'Create your smart goal',
        type: PlanGroup.WORK,
        url: RoutePaths.CREATE_SMART_GOAL,
      },
    ]);
  }
}
