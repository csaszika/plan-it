import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { MockModule, MockPipe } from 'ng-mocks';

import { CreatablePlanListContainer } from '../../create-plan/containers/createable-plan-list/creatable-plan-list-container.component';
import { LANGUAGE_EN, LANGUAGE_HU } from '../../shared/constants/languages.constants';
import { MainNavComponent } from './main-nav.component';

@Component({
    template: '<pi-main-nav></pi-main-nav>',
})
class TestWrapperComponent {
    @ViewChild(CreatablePlanListContainer, { static: true }) component!: CreatablePlanListContainer;
}

describe('MainNavComponent', () => {
    const mockTranslateService: Spy<TranslateService> = createSpyFromClass(TranslateService, ['getBrowserLang', 'get', 'use']);
    let fixture: ComponentFixture<TestWrapperComponent>;
    Given(() => {
        TestBed.configureTestingModule({
            declarations: [TestWrapperComponent, MainNavComponent, MockPipe(TranslatePipe)],
            imports: [
                RouterTestingModule,
                MockModule(MatButtonModule),
                MockModule(MatIconModule),
                MockModule(MatListModule),
                MockModule(MatSidenavModule),
                MockModule(MatToolbarModule),
            ],
            providers: [{ provide: TranslateService, useValue: mockTranslateService }],
        }).compileComponents();
    });

    Given(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-main-nav');
    const huTranslationButton = () => element().querySelector('button[name=change-to-hu]');
    const enTranslationButton = () => element().querySelector('button[name=change-to-en]');

    describe('Initializing', () => {
        When(() => {
            fixture.detectChanges();
        });

        Then('should be created', () => {
            expect(element()).toBeTruthy();
        });

        Then('should have translate buttons', () => {
            expect(huTranslationButton()).toExist();
            expect(enTranslationButton()).toExist();
        });
    });

    describe('Events', () => {
        describe('push change language to hu button', () => {
            When(() => {
                fixture.detectChanges();
                huTranslationButton().click();
            });

            Then('change the language', () => {
                expect(mockTranslateService.use).toHaveBeenCalledWith(LANGUAGE_HU);
            });
        });

        describe('push change language to en button', () => {
            When(() => {
                fixture.detectChanges();
                enTranslationButton().click();
            });

            Then('change the language', () => {
                expect(mockTranslateService.use).toHaveBeenCalledWith(LANGUAGE_EN);
            });
        });
    });
});
