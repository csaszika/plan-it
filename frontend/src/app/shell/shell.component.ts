import { Component } from '@angular/core';

import { RoutePaths } from '../app.routes';
import { MenuItem } from './types/menu-item.interface';

@Component({
  selector: 'pi-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  menuItems: MenuItem[] = [
    { url: `/${RoutePaths.DASHBOARD}`, name: 'Dashboard' },
    { url: `/${RoutePaths.CREATE_PLAN}`, name: 'Create plan' },
    { url: `/${RoutePaths.MY_PLANS}`, name: 'My plans' },
  ];
}
