import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoutePaths } from '@plan-it/types/ui-routes';

import { MenuItem } from './types/menu-item.interface';

@Component({
    selector: 'pi-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['./shell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
    menuItems: MenuItem[] = [
        { url: `/${RoutePaths.DASHBOARD}`, key: 'NAVBAR.menuItem.dashboard' },
        { url: `/${RoutePaths.CREATE_PLAN}`, key: 'NAVBAR.menuItem.createPlan' },
        { url: `/${RoutePaths.PLANS}`, key: 'NAVBAR.menuItem.plans' },
    ];
}
