import { ComponentDriver } from 'angular-unit-component-driver';

import { MainNavComponent } from './main-nav/main-nav.component';
import { ShellComponent } from './shell.component';

export class ShellComponentDriver extends ComponentDriver<ShellComponent> {
    get mainNav(): MainNavComponent {
        return this.queryDirective(MainNavComponent);
    }
}
