import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslatePipe } from '@ngx-translate/core';
import { MockComponent, MockModule, MockPipe, ngMocks } from 'ng-mocks';
import { of } from 'rxjs';

import { TrainingPlansService } from '../../../../shared/services/training-plans/training-plans.service';
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
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [MatTableModule],
                declarations: [
                    TestWrapperComponent,
                    FootballPlansContainer,
                    MockPipe(TranslatePipe, (x: any) => x),
                    MockComponent(MatIcon),
                ],
                providers: [
                    {
                        provide: TrainingPlansService,
                        useValue: {
                            getPlans$: () =>
                                of([
                                    { id: 'id', name: 'Plany', ageClass: 'U18', level: 4, creator: 'Konci' },
                                    { id: 'id2', name: 'Awesome plan', ageClass: 'U14', level: 3, creator: 'Majom' },
                                ]),
                        },
                    },
                ],
            }).compileComponents();
        })
    );

    Given(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-football-plans-container');
    const table = () => element().querySelector('table');
    const tableHeaderColumns = () => table().querySelectorAll('th');

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

        Then('should have the table header column with translation keys', () => {
            // tslint:disable:no-magic-numbers
            const columns = fixture.componentInstance.component.displayedColumns;
            expect(tableHeaderColumns()[0].innerHTML).toContain(columns[0]);
            expect(tableHeaderColumns()[1].innerHTML).toContain(columns[1]);
            expect(tableHeaderColumns()[2].innerHTML).toContain(columns[2]);
            expect(tableHeaderColumns()[3]).toExist();
            // tslint:enable:no-magic-numbers
            expect(tableHeaderColumns().length).toEqual(fixture.componentInstance.component.displayedColumns.length);
        });
    });
});
