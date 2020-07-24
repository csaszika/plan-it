import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent, ngMocks } from 'ng-mocks';

import { CreatablePlanListContainer } from '../create-plan/containers/createable-plan-list/creatable-plan-list-container.component';
import { RoutePaths } from '../shared/routes/app.routes';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ShellComponent } from './shell.component';

@Component({
    template: '<pi-shell></pi-shell>',
})
class TestWrapperComponent {
    @ViewChild(CreatablePlanListContainer, { static: true }) component!: CreatablePlanListContainer;
}

describe('ShellComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;

    Given(() => {
        TestBed.configureTestingModule({
            declarations: [TestWrapperComponent, ShellComponent, MockComponent(MainNavComponent)],
        }).compileComponents();
    });

    Given(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-shell');
    const mainNav = () => ngMocks.find(fixture.debugElement, MainNavComponent).componentInstance;

    describe('Initializing', () => {
        Given(() => {});

        When(() => {
            fixture.detectChanges();
        });

        Then('should be created', () => {
            expect(element()).toBeTruthy();
        });

        Then('should have the main nav', () => {
            expect(mainNav()).toExist();
            expect(mainNav().menuItems).toEqual([
                { url: `/${RoutePaths.DASHBOARD}`, key: 'NAVBAR.menuItem.dashboard' },
                { url: `/${RoutePaths.CREATE_PLAN}`, key: 'NAVBAR.menuItem.createPlan' },
                { url: `/${RoutePaths.PLANS}`, key: 'NAVBAR.menuItem.plans' },
            ]);
        });
    });
});
