import { ComponentDriver } from 'angular-unit-component-driver';
import { MainNavComponent } from './main-nav.component';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

export class MainNavComponentDriver extends ComponentDriver<MainNavComponent> {
  get routerOutlet(): RouterOutlet {
    return this.queryDirective(RouterOutlet);
  }
}
