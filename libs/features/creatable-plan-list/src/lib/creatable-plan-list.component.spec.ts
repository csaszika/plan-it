import { MockComponent, ngMocks } from 'ng-mocks';

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationCardsComponent } from '@plan-it/ui-components/navigation-cards';
import { CreatePlanRoutes } from '@plan-it/types/ui-routes';

import { CreatablePlanListComponent } from './creatable-plan-list.component';

@Component({
    template: '<pi-creatable-plan-list></pi-creatable-plan-list>',
})
class TestWrapperComponent {
    @ViewChild(CreatablePlanListComponent, { static: true }) component!: CreatablePlanListComponent;
}

describe('CreatablePlanListComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [NoopAnimationsModule],
                declarations: [TestWrapperComponent, CreatablePlanListComponent, MockComponent(NavigationCardsComponent)],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-creatable-plan-list');
    const navCards = () => ngMocks.find(NavigationCardsComponent).componentInstance;

    describe('Initializing', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
        });

        it('should have navigation cards', () => {
            expect(navCards().navCardItems).toEqual([
                {
                    title: 'Football',
                    description: 'Create your own football training',
                    url: CreatePlanRoutes.CREATE_FOOTBALL_PLAN,
                },
                {
                    title: 'Agility',
                    description: 'Create your own agility training',
                    url: CreatePlanRoutes.CREATE_AGILITY_PLAN,
                },
                {
                    title: 'Smart goal',
                    description: 'Create your smart goal',
                    url: CreatePlanRoutes.CREATE_SMART_GOAL,
                },
            ]);
        });
    });
});
