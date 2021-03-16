import { Observable, of } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { cardListAnimation } from '@plan-it/animations';
import { CreatePlanRoutes } from '@plan-it/types/ui-routes';
import { NavCardItem } from '@plan-it/ui-components/navigation-cards';

@Component({
    selector: 'pi-creatable-plan-list',
    templateUrl: './creatable-plan-list.component.html',
    styleUrls: ['./creatable-plan-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [cardListAnimation],
})
export class CreatablePlanListComponent implements OnInit {
    planTypes$!: Observable<Array<NavCardItem>>;

    ngOnInit(): void {
        this.planTypes$ = of([
            {
                title: 'Football',
                description: 'Create your own football training',
                url: CreatePlanRoutes.CREATE_FOOTBALL_PLAN,
            },
            {
                title: 'Agility',
                description: 'Create your own agility training',
                url: CreatePlanRoutes.CREATE_AGILITY_PLAN,
            },
            {
                title: 'Smart goal',
                description: 'Create your smart goal',
                url: CreatePlanRoutes.CREATE_SMART_GOAL,
            },
        ]);
    }
}
