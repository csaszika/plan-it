import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { cardListAnimation } from '../../../shared/animations/card-list.animations';
import { CreatePlanRoutes } from '../../../shared/routes/create-plan.routes';
import { PlanGroup } from '../../types/plan-group.enums';
import { NavCardItem } from '../../../shared/navigation-cards/interfaces/nav-card-item';

@Component({
  selector: 'pi-creatable-plan-list',
  templateUrl: './creatable-plan-list-container.component.html',
  styleUrls: ['./creatable-plan-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [cardListAnimation],
})
export class CreatablePlanListContainerComponent implements OnInit {
  planTypes$!: Observable<Array<NavCardItem>>;

  ngOnInit(): void {
    this.planTypes$ = of([
      {
        title: 'Football',
        description: 'Create your own football training',
        type: PlanGroup.SPORT,
        url: CreatePlanRoutes.CREATE_FOOTBALL_PLAN,
      },
      {
        title: 'Agility',
        description: 'Create your own agility training',
        type: PlanGroup.SPORT,
        url: CreatePlanRoutes.CREATE_AGILITY_PLAN,
      },
      {
        title: 'Smart goal',
        description: 'Create your smart goal',
        type: PlanGroup.WORK,
        url: CreatePlanRoutes.CREATE_SMART_GOAL,
      },
    ]);
  }
}
