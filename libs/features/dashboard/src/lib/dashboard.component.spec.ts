import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

@Component({
    template: '<pi-dashboard></pi-dashboard>',
})
class TestWrapperComponent {
    @ViewChild(DashboardComponent, { static: true })
    component!: DashboardComponent;
}

describe('DashboardComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestWrapperComponent, DashboardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-dashboard');

    describe('Initializing', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should be fine', () => {
            expect(element()).toExist();
        });
    });
});
