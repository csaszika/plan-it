import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslatePipe } from '@ngx-translate/core';
import { MockComponent, MockModule, MockPipe, ngMocks } from 'ng-mocks';

import { FootballPlansContainer } from './football-plans-container.component';

@Component({
    template: '<pi-football-plans-container></pi-football-plans-container>',
})
class TestWrapperComponent {
    @ViewChild(FootballPlansContainer, { static: true }) component!: FootballPlansContainer;
}

describe('FootballPlansContainerComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;

    Given(
        async(() => {
            TestBed.configureTestingModule({
                imports: [MockModule(MatTableModule)],
                declarations: [TestWrapperComponent, FootballPlansContainer, MockPipe(TranslatePipe), MockComponent(MatIcon)],
            }).compileComponents();
        })
    );

    Given(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-football-plans-container');
    const table = () => element().querySelector('table');

    describe('Initializing', () => {
        When(() => {
            fixture.detectChanges();
        });

        Then('should be created', () => {
            expect(element()).toBeTruthy();
        });

        Then('should have the table', () => {
            expect(table()).toExist();
        });
    });
});
