import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PlanGroup } from '../../../create-plan/types/plan-group.enums';
import { cardListAnimation } from '../../../shared/animations/card-list.animations';
import { NavCardItem } from '../../../shared/navigation-cards/interfaces/nav-card-item';
import { PlansRoutes } from '../../../shared/routes/plans.routes';

@Component({
  selector: 'pi-plans-table-list-container',
  templateUrl: './plans-table-list-container.component.html',
  styleUrls: ['./plans-table-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [cardListAnimation],
})
export class PlansTableListContainerComponent implements OnInit {
  planTypes$!: Observable<Array<NavCardItem>>;

  ngOnInit(): void {
    this.planTypes$ = of([
      {
        title: 'Football',
        description: 'Create your own football training',
        type: PlanGroup.SPORT,
        url: PlansRoutes.FOOTBALL_PLANS,
      },
      {
        title: 'Agility',
        description: 'Create your own agility training',
        type: PlanGroup.SPORT,
        url: PlansRoutes.AGILITY_PLANS,
      },
      {
        title: 'Smart goal',
        description: 'Create your smart goal',
        type: PlanGroup.WORK,
        url: PlansRoutes.SMART_GOALS,
      },
    ]);
  }
}
