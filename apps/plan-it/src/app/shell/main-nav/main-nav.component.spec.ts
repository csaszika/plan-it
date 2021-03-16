import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
import { MockModule, MockPipe } from 'ng-mocks';

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { Languages } from '../../shared/constants/languages.constants';

import { MainNavComponent } from './main-nav.component';

@Component({
    template: '<pi-main-nav></pi-main-nav>',
})
class TestWrapperComponent {
    @ViewChild(MainNavComponent, { static: true }) component!: MainNavComponent;
}

describe('MainNavComponent', () => {
    const mockTranslateService: Spy<TranslateService> = createSpyFromClass(TranslateService, ['getBrowserLang', 'get', 'use']);
    let fixture: ComponentFixture<TestWrapperComponent>;
    beforeEach(() => {
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

    beforeEach(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-main-nav');
    const huTranslationButton = () => element().querySelector('button[name=change-to-hu]');
    const enTranslationButton = () => element().querySelector('button[name=change-to-en]');

    describe('Initializing', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
        });

        it('should have translate buttons', () => {
            expect(huTranslationButton()).toExist();
            expect(enTranslationButton()).toExist();
        });
    });

    describe('Events', () => {
        describe('push change language to hu button', () => {
            beforeEach(() => {
                fixture.detectChanges();
                huTranslationButton().click();
            });

            it('change the language', () => {
                expect(mockTranslateService.use).toHaveBeenCalledWith(Languages.HU);
            });
        });

        describe('push change language to en button', () => {
            beforeEach(() => {
                fixture.detectChanges();
                enTranslationButton().click();
            });

            it('change the language', () => {
                expect(mockTranslateService.use).toHaveBeenCalledWith(Languages.EN);
            });
        });
    });
});
