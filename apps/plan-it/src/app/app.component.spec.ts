import { of } from 'rxjs';

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { Languages } from './shared/constants/languages.constants';

@Component({
    template: '<pi-root></pi-root>',
})
class TestWrapperComponent {
    @ViewChild(AppComponent, { static: true }) appComponent!: AppComponent;
}

describe('AppComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    const languageUseSpy = jasmine.createSpy().and.returnValue(of(Languages.HU));
    const getBrowserLangSpy = jasmine.createSpy().and.returnValue(Languages.EN);

    beforeEach(
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
        beforeEach(() => {
            fixture = TestBed.createComponent(TestWrapperComponent);
        });

        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
            expect(routerOutlet()).toExist();
        });

        it('should use appropriate language', () => {
            expect(languageUseSpy).toHaveBeenCalledTimes(1);
            expect(languageUseSpy).toHaveBeenCalledWith(Languages.EN);
        });

        afterEach(() => {
            languageUseSpy.calls.reset();
        });
    });

    describe('Initializing with unknown language', () => {
        beforeEach(() => {
            getBrowserLangSpy.and.returnValue('ES');
            fixture = TestBed.createComponent(TestWrapperComponent);
        });

        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
            expect(routerOutlet()).toBeTruthy();
        });

        it('should use appropriate language', () => {
            expect(languageUseSpy).toHaveBeenCalledTimes(1);
            expect(languageUseSpy).toHaveBeenCalledWith(Languages.EN);
        });

        afterEach(() => {
            languageUseSpy.calls.reset();
        });
    });
});
