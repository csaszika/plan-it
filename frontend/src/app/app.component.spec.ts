import { async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppComponentDriver } from './app.component.driver';
import { LANGUAGE_EN, LANGUAGE_HU } from './shared/constants/languages.constants';

const componentSetup = (languageUseSpy: jasmine.Spy, getBrowserLangSpy: jasmine.Spy): AppComponentDriver => {
    return componentTestingSetup({
        componentClass: AppComponent,
        driver: AppComponentDriver,
        imports: [RouterTestingModule],
        providers: [
            {
                provide: TranslateService,
                useValue: {
                    use: languageUseSpy,
                    getBrowserLang: getBrowserLangSpy,
                },
            },
        ],
    });
};

describe('AppComponent', () => {
    let driver: AppComponentDriver;

    const languageUseSpy = jasmine.createSpy().and.returnValue(of(LANGUAGE_HU));
    const getBrowserLangSpy = jasmine.createSpy().and.returnValue(LANGUAGE_HU);

    Given(() => {
        driver = componentSetup(languageUseSpy, getBrowserLangSpy);
    });

    describe('Initializing', () => {
        Given(() => {});

        When(() => {
            driver.detectChanges();
        });

        Then('should be created', () => {
            expect(driver.componentInstance).toBeTruthy();
            expect(driver.routerOutlet).toBeTruthy();
        });

        Then('should use appropriate language', () => {
            expect(languageUseSpy).toHaveBeenCalledTimes(1);
            expect(languageUseSpy).toHaveBeenCalledWith(LANGUAGE_HU);
        });

        afterEach(() => {
            languageUseSpy.calls.reset();
        });
    });

    // describe('Initializing with unknown language', () => {
    //     Given(() => {
    //         getBrowserLangSpy.and.returnValue('ES');
    //     });
    //
    //     When(() => {
    //         driver.detectChanges();
    //     });
    //
    //     Then('should be created', () => {
    //         expect(driver.componentInstance).toBeTruthy();
    //         expect(driver.routerOutlet).toBeTruthy();
    //     });
    //
    //     Then('should use appropriate language', () => {
    //         expect(languageUseSpy).toHaveBeenCalledTimes(1);
    //         expect(languageUseSpy).toHaveBeenCalledWith(LANGUAGE_EN);
    //     });
    // });

  // afterEach(() => {
  //     languageUseSpy.calls.reset();
  // });
});
