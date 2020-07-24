import { Component, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponent, ngMocks } from 'ng-mocks';

import { NavigationCardsComponent } from '../../../shared/navigation-cards/navigation-cards/navigation-cards.component';
import { CreatePlanRoutes } from '../../../shared/routes/create-plan.routes';
import { PlanGroup } from '../../types/plan-group.enums';
import { CreatablePlanListContainer } from './creatable-plan-list-container.component';

@Component({
    template: '<pi-creatable-plan-list></pi-creatable-plan-list>',
})
class TestWrapperComponent {
    @ViewChild(CreatablePlanListContainer, { static: true }) component!: CreatablePlanListContainer;
}

describe('CreatablePlanListComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    Given(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule],
            declarations: [TestWrapperComponent, CreatablePlanListContainer, MockComponent(NavigationCardsComponent)],
        }).compileComponents();
    });

    Given(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-creatable-plan-list');
    const navCards = () => ngMocks.find(fixture.debugElement, NavigationCardsComponent).componentInstance;

    describe('Initializing', () => {
        When(() => {
            fixture.detectChanges();
        });

        Then('should be created', () => {
            expect(element()).toBeTruthy();
        });

        Then('should have navigation cards', () => {
            expect(navCards()).toExist();
            expect(navCards().navCardItems).toEqual([
                {
                    title: 'Football',
                    description: 'Create your own football training',
                    type: PlanGroup.SPORT,
                    url: CreatePlanRoutes.CREATE_FOOTBALL_PLAN,
                },
                {
                    title: 'Agility',
                    description: 'Create your own agility training',
                    type: PlanGroup.SPORT,
                    url: CreatePlanRoutes.CREATE_AGILITY_PLAN,
                },
                {
                    title: 'Smart goal',
                    description: 'Create your smart goal',
                    type: PlanGroup.WORK,
                    url: CreatePlanRoutes.CREATE_SMART_GOAL,
                },
            ]);
        });
    });
});
