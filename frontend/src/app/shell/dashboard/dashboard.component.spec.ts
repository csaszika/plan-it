import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

@Component({
    template: '<pi-dashboard></pi-dashboard>',
})
class TestWrapperComponent {
    @ViewChild(DashboardComponent, { static: true }) component!: DashboardComponent;
}

describe('DashboardComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    Given(() => {
        TestBed.configureTestingModule({
            declarations: [TestWrapperComponent, DashboardComponent],
        }).compileComponents();
    });

    Given(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-dashboard');

    describe('Initializing', () => {
        Given(() => {});

        When(() => {
            fixture.detectChanges();
        });

        Then(() => {
            expect(element()).toBeTruthy();
        });
    });
});
