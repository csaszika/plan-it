import { RouterOutlet } from '@angular/router';
import { ComponentDriver } from 'angular-unit-component-driver';

import { MainNavComponent } from './main-nav.component';

export class MainNavComponentDriver extends ComponentDriver<MainNavComponent> {
  get routerOutlet(): RouterOutlet {
    return this.queryDirective(RouterOutlet);
  }
}
