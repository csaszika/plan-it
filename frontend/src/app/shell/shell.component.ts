import { Component } from '@angular/core';

import { MenuItem } from './types/menu-item.interface';

@Component({
  selector: 'pi-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  menuItems: MenuItem[] = [{ url: '/create-plan', name: 'Create plan' }, { url: '/my-plans', name: 'My plans' }];
}
