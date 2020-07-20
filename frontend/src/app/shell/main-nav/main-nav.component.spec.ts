import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { MockModule, MockPipe } from 'ng-mocks';

import { LANGUAGE_EN, LANGUAGE_HU } from '../../shared/constants/languages.constants';
import { MainNavComponent } from './main-nav.component';
import { MainNavComponentDriver } from './main-nav.component.driver';

const componentSetup = (mockTranslateService: Spy<TranslateService>): MainNavComponentDriver => {
    return componentTestingSetup({
        componentClass: MainNavComponent,
        driver: MainNavComponentDriver,
        declarations: [MockPipe(TranslatePipe)],
        imports: [
            RouterTestingModule,
            MockModule(MatButtonModule),
            MockModule(MatIconModule),
            MockModule(MatListModule),
            MockModule(MatSidenavModule),
            MockModule(MatToolbarModule),
        ],
        providers: [{ provide: TranslateService, useValue: mockTranslateService }],
    });
};

describe('MainNavComponent', () => {
    let driver: MainNavComponentDriver;
    const mockTranslateService: Spy<TranslateService> = createSpyFromClass(TranslateService, ['getBrowserLang', 'get', 'use']);

    Given(() => {
        driver = componentSetup(mockTranslateService);
    });

    describe('Initializing', () => {
        When(() => {
            driver.detectChanges();
        });

        Then('should be created', () => {
            expect(driver.componentInstance).toBeTruthy();
            expect(driver.routerOutlet).toBeTruthy();
        });
    });

    describe('Events', () => {
        describe('push change language to hu button', () => {
            let spy: jasmine.Spy;
            Given(() => {
                spy = spyOn(driver.componentInstance, 'onClickHUTranslation').and.callThrough();
            });

            When(() => {
                driver.detectChanges();
                driver.huTranslationButton.click();
            });

            Then('change the language', () => {
                expect(spy).toHaveBeenCalledTimes(1);
                expect(mockTranslateService.use).toHaveBeenCalledWith(LANGUAGE_HU);
            });
        });

        describe('push change language to en button', () => {
            let spy: jasmine.Spy;
            Given(() => {
                spy = spyOn(driver.componentInstance, 'onClickENTranslation').and.callThrough();
            });

            When(() => {
                driver.detectChanges();
                driver.enTranslationButton.click();
            });

            Then('change the language', () => {
                expect(spy).toHaveBeenCalledTimes(1);
                expect(mockTranslateService.use).toHaveBeenCalledWith(LANGUAGE_EN);
            });
        });
    });
});
