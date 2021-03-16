import { MockComponent, ngMocks } from 'ng-mocks';

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationCardsComponent } from '@plan-it/ui-components/navigation-cards';
import { PlansRoutes } from '@plan-it/types/ui-routes';

import { PlansListComponent } from './plans-list.component';

@Component({
    template: '<pi-plans-list></pi-plans-list>',
})
class TestWrapperComponent {
    @ViewChild(PlansListComponent, { static: true }) component!: PlansListComponent;
}

describe('PlansListComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule],
            declarations: [TestWrapperComponent, PlansListComponent, MockComponent(NavigationCardsComponent)],
            providers: [],
        });
    });

    const element = () => fixture.nativeElement.querySelector('pi-plans-list');
    const navCards = () => ngMocks.find(fixture.debugElement, NavigationCardsComponent).componentInstance;

    beforeEach(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    describe('Initializing', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
        });

        it('should have navigation cards', () => {
            expect(navCards()).toExist();
            expect(navCards().navCardItems).toEqual([
                {
                    title: 'Football',
                    description: 'Check your football trainings',
                    url: PlansRoutes.FOOTBALL_PLANS,
                },
                {
                    title: 'Agility',
                    description: 'Check your agility trainings',
                    url: PlansRoutes.AGILITY_PLANS,
                },
                {
                    title: 'Smart goal',
                    description: 'Check your smart goals',
                    url: PlansRoutes.SMART_GOALS,
                },
            ]);
        });
    });
});
