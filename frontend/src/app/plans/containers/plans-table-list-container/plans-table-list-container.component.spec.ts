import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponent, ngMocks } from 'ng-mocks';

import { PlanGroup } from '../../../create-plan/types/plan-group.enums';
import { NavigationCardsComponent } from '../../../shared/navigation-cards/navigation-cards/navigation-cards.component';
import { PlansRoutes } from '../../../shared/routes/plans.routes';
import { PlansTableListContainer } from './plans-table-list-container.component';

@Component({
    template: '<pi-plans-table-list-container></pi-plans-table-list-container>',
})
class TestWrapperComponent {
    @ViewChild(PlansTableListContainer, { static: true }) component!: PlansTableListContainer;
}

describe('PlansTableListContainer', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;

    Given(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule],
            declarations: [TestWrapperComponent, PlansTableListContainer, MockComponent(NavigationCardsComponent)],
            providers: [],
        });
    });

    const element = () => fixture.nativeElement.querySelector('pi-plans-table-list-container');
    const navCards = () => ngMocks.find(fixture.debugElement, NavigationCardsComponent).componentInstance;

    Given(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

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
                    url: PlansRoutes.FOOTBALL_PLANS,
                },
                {
                    title: 'Agility',
                    description: 'Create your own agility training',
                    type: PlanGroup.SPORT,
                    url: PlansRoutes.AGILITY_PLANS,
                },
                {
                    title: 'Smart goal',
                    description: 'Create your smart goal',
                    type: PlanGroup.WORK,
                    url: PlansRoutes.SMART_GOALS,
                },
            ]);
        });
    });
});
