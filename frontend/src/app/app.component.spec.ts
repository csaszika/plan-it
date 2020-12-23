import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { LANGUAGE_EN, LANGUAGE_HU } from './shared/constants/languages.constants';

@Component({
    template: '<pi-root></pi-root>',
})
class TestWrapperComponent {
    @ViewChild(AppComponent, { static: true }) appComponent!: AppComponent;
}

describe('AppComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    const languageUseSpy = jasmine.createSpy().and.returnValue(of(LANGUAGE_HU));
    const getBrowserLangSpy = jasmine.createSpy().and.returnValue(LANGUAGE_HU);

    Given(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [RouterTestingModule],
                declarations: [TestWrapperComponent, AppComponent],
                providers: [
                    {
                        provide: TranslateService,
                        useValue: {
                            use: languageUseSpy,
                            getBrowserLang: getBrowserLangSpy,
                        },
                    },
                ],
            }).compileComponents();
        })
    );

    const element = () => fixture.nativeElement.querySelector('pi-root');
    const routerOutlet = () => fixture.nativeElement.querySelector('router-outlet');

    describe('Initializing', () => {
        Given(() => {
            fixture = TestBed.createComponent(TestWrapperComponent);
        });

        When(() => {
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
            expect(routerOutlet()).toExist();
        });

        Then('should use appropriate language', () => {
            expect(languageUseSpy).toHaveBeenCalledTimes(1);
            expect(languageUseSpy).toHaveBeenCalledWith(LANGUAGE_HU);
        });

        afterEach(() => {
            languageUseSpy.calls.reset();
        });
    });

    describe('Initializing with unknown language', () => {
        Given(() => {
            getBrowserLangSpy.and.returnValue('ES');
            fixture = TestBed.createComponent(TestWrapperComponent);
        });

        When(() => {
            fixture.detectChanges();
        });

        Then('should be created', () => {
            expect(element()).toBeTruthy();
            expect(routerOutlet()).toBeTruthy();
        });

        Then('should use appropriate language', () => {
            expect(languageUseSpy).toHaveBeenCalledTimes(1);
            expect(languageUseSpy).toHaveBeenCalledWith(LANGUAGE_EN);
        });

        afterEach(() => {
            languageUseSpy.calls.reset();
        });
    });
});
