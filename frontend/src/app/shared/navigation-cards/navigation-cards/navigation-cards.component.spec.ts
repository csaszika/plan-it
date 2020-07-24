import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { MockComponent } from 'ng-mocks';

import { CreatePlanRoutes } from '../../routes/create-plan.routes';
import { NavigationCardsComponent } from './navigation-cards.component';

@Component({
    template: '<pi-navigation-cards [navCardItems]="navCardItems"></pi-navigation-cards>',
})
class TestWrapperComponent {
    @ViewChild(NavigationCardsComponent, { static: true }) component!: NavigationCardsComponent;

    navCardItems = [
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
    ];
}

describe('NavigationCardsComponent', () => {
    let fixture: ComponentFixture<NavigationCardsComponent>;

    Given(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
                TestWrapperComponent,
                NavigationCardsComponent,
                MockComponent(MatCard),
                MockComponent(MatCardTitle),
                MockComponent(MatCardSubtitle),
            ],
            schemas: [],
        }).compileComponents();
    });

    Given(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-navigation-cards');
    const firstPlanCard = () => fixture.nativeElement.querySelector('mat-card');

    describe('Initializing', () => {
        Given(() => {
            fixture.detectChanges();
        });

        Then('should create', () => {
            expect(element()).toBeTruthy();
        });

        Then('could navigate to route', () => {
            expect(firstPlanCard()).toExist();
            expect(firstPlanCard().getAttribute('ng-reflect-router-link')).toEqual(CreatePlanRoutes.CREATE_FOOTBALL_PLAN);
        });
    });
});
