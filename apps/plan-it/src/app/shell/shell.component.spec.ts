import { MockComponent, ngMocks } from 'ng-mocks';

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutePaths } from '@plan-it/types/ui-routes';

import { MainNavComponent } from './main-nav/main-nav.component';
import { ShellComponent } from './shell.component';

@Component({
    template: '<pi-shell></pi-shell>',
})
class TestWrapperComponent {
    @ViewChild(ShellComponent, { static: true }) component!: ShellComponent;
}

describe('ShellComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestWrapperComponent, ShellComponent, MockComponent(MainNavComponent)],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-shell');
    const mainNav = () => ngMocks.find(fixture.debugElement, MainNavComponent).componentInstance;

    describe('Initializing', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
        });

        it('should have the main nav', () => {
            expect(mainNav()).toExist();
            expect(mainNav().menuItems).toEqual([
                { url: `/${RoutePaths.DASHBOARD}`, key: 'NAVBAR.menuItem.dashboard' },
                {
                    url: `/${RoutePaths.CREATE_PLAN}`,
                    key: 'NAVBAR.menuItem.createPlan',
                },
                { url: `/${RoutePaths.PLANS}`, key: 'NAVBAR.menuItem.plans' },
            ]);
        });
    });
});
