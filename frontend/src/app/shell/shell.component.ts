import { Component } from '@angular/core';

import { MenuItem } from './types/menu-item.interface';
import { RoutePaths } from '../app-routing.module';

@Component({
  selector: 'pi-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  menuItems: MenuItem[] = [
    { url: `/${RoutePaths.dashboard}`, name: 'Dashboard' },
    { url: `/${RoutePaths.createPlan}`, name: 'Create plan' },
    { url: `/${RoutePaths.myPlans}`, name: 'My plans' },
  ];
}
