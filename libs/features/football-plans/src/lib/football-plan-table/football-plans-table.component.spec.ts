import { MockComponent, MockPipe, ngMocks } from 'ng-mocks';
import { of } from 'rxjs';

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { TrainingPlansService } from '@plan-it/training-plans-api';

import { FootballPlansTableComponent } from './football-plans-table.component';

@Component({
    template: '<pi-football-plans-table></pi-football-plans-table>',
})
class TestWrapperComponent {
    @ViewChild(FootballPlansTableComponent, { static: true }) component!: FootballPlansTableComponent;
}

describe('FootballPlansTableComponentComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;

    const plans = [
        { id: 'id', name: 'Plany', ageClass: 'U18', level: 4, creator: 'Konci' },
        { id: 'id2', name: 'Awesome plan', ageClass: 'U14', level: 3, creator: 'Majom' },
    ];

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [MatTableModule, RouterTestingModule],
                declarations: [
                    TestWrapperComponent,
                    FootballPlansTableComponent,
                    MockPipe(TranslatePipe, (x: string) => x),
                    MockComponent(MatIcon),
                    MockComponent(MatPaginator),
                ],
                providers: [
                    {
                        provide: TrainingPlansService,
                        useValue: {
                            getPlans$: () => of(plans),
                            deletePlan: jasmine.createSpy(),
                        },
                    },
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
    });

    const element = () => fixture.nativeElement.querySelector('pi-football-plans-table');
    const table = () => element().querySelector('table');
    const tableHeaderColumns = () => table().querySelectorAll('th');
    const paginator = () => ngMocks.find(fixture.debugElement, MatPaginator).componentInstance;

    describe('Initializing', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
        });

        it('should have the table', () => {
            expect(table()).toExist();
        });

        // it('should have the table rows', (done: DoneCallback) => {
        //     fixture.beforeEachStable().then(() => {
        //         fixture.detectChanges();
        //         expect(tableRows().length).toEqual(plans.length);
        //         done();
        //     });
        // });

        it('should have the table header column with translation keys', () => {
            const columns = fixture.componentInstance.component.displayedColumns;
            expect(tableHeaderColumns()[0].innerHTML).toContain(columns[0]);
            expect(tableHeaderColumns()[1].innerHTML).toContain(columns[1]);
            expect(tableHeaderColumns()[2].innerHTML).toContain(columns[2]);
            expect(tableHeaderColumns()[3]).toExist();
            expect(tableHeaderColumns().length).toEqual(columns.length);
        });

        it('should have the paginator with configuration', () => {
            expect(paginator()).toExist();
            expect(paginator().length).toEqual(50);
            expect(paginator().pageSize).toEqual(10);
            expect(paginator().pageSizeOptions).toEqual([5, 10, 25, 50]);
        });
    });

    // Somehow I cannot create a selector for mat-icons...
    // describe('Events', () => {
    //     beforeEach(() => {
    //         fixture.detectChanges();
    //         const deleteIconInFirstRow = tableRows()[0].querySelectorAll('mat-icon')[0];
    //         deleteIconInFirstRow.click();
    //     });
    //
    //     it('should delete the plan', () => {
    //         expect(TestBed.inject(TrainingPlansService).deletePlan).toHaveBeenCalledWith('id');
    //     });
    // });
});
