import { RouterOutlet } from '@angular/router';
import { ComponentDriver } from 'angular-unit-component-driver';

import { MainNavComponent } from './main-nav.component';

export class MainNavComponentDriver extends ComponentDriver<MainNavComponent> {
    get routerOutlet(): RouterOutlet {
        return this.queryDirective(RouterOutlet);
    }

    get huTranslationButton(): HTMLButtonElement {
        return this.querySelector('button[name=change-to-hu]');
    }

    get enTranslationButton(): HTMLButtonElement {
        return this.querySelector('button[name=change-to-en]');
    }
}
