import { Observable, of } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { cardListAnimation } from '@plan-it/animations';
import { NavCardItem } from '@plan-it/ui-components/navigation-cards';
import { PlansRoutes } from '@plan-it/types/ui-routes';

@Component({
    selector: 'pi-plans-list',
    templateUrl: './plans-list.component.html',
    styleUrls: ['./plans-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [cardListAnimation],
})
export class PlansListComponent implements OnInit {
    planTypes$!: Observable<Array<NavCardItem>>;

    ngOnInit(): void {
        this.planTypes$ = of([
            {
                title: 'Football',
                description: 'Check your football trainings',
                url: PlansRoutes.FOOTBALL_PLANS,
            },
            {
                title: 'Agility',
                description: 'Check your agility trainings',
                url: PlansRoutes.AGILITY_PLANS,
            },
            {
                title: 'Smart goal',
                description: 'Check your smart goals',
                url: PlansRoutes.SMART_GOALS,
            },
        ]);
    }
}
