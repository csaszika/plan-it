import { RouterOutlet } from '@angular/router';
import { ComponentDriver } from 'angular-unit-component-driver';

import { AppComponent } from './app.component';

export class AppComponentDriver extends ComponentDriver<AppComponent> {
  get routerOutlet(): RouterOutlet {
    return this.queryDirective(RouterOutlet);
  }
}
