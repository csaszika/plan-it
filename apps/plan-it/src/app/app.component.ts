import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Languages } from './shared/constants/languages.constants';

@Component({
    selector: 'pi-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private readonly translate: TranslateService) {
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|hu/) ? browserLang : Languages.EN);
    }
}
