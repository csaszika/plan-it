import { MockComponent, MockPipe, ngMocks } from 'ng-mocks';

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { TrainingPlansService } from '@plan-it/training-plans-api';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { FootballState, FootballTrainingPlansState } from '@plan-it/ngrx-store/football';
import { getFootballTrainingPlans } from '@plan-it/ngrx-actions/football-training-plans';
import { TrainingPlan } from '@plan-it/types/training-plan';

import { FootballPlansTableComponent } from './football-plans-table.component';

@Component({
    template: '<pi-football-plans-table></pi-football-plans-table>',
})
class TestWrapperComponent {
    @ViewChild(FootballPlansTableComponent, { static: true }) component!: FootballPlansTableComponent;
}

describe('FootballPlansTableComponentComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    let store: MockStore<FootballState>;

    const plans = [
        {
            id: 'id',
            ageClass: 'U18',
            description: 'desc',
            goal: 'goal',
            level: 4,
            name: 'Plany',
            steps: [
                {
                    name: 'stepName',
                    description: '',
                },
            ],
        },
        {
            id: 'id2',
            ageClass: 'U20',
            description: 'description',
            goal: 'goal',
            level: 3,
            name: 'Awesome plan',
            steps: [],
        },
    ] as TrainingPlan[];

    const initialState = (): FootballTrainingPlansState => {
        return {
            selectedPlanId: null,
            loading: false,
            error: false,
            ids: plans.map((plan: TrainingPlan) => plan.id),
            entities: { id: plans[0], id2: plans[1] },
        };
    };

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
                            deletePlan: jasmine.createSpy(),
                        },
                    },
                    provideMockStore({
                        initialState: {
                            football: {
                                footballTrainingPlans: initialState(),
                            } as Partial<FootballState>,
                        },
                    }),
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
        store = TestBed.inject(MockStore);
    });

    const element = () => fixture.nativeElement.querySelector('pi-football-plans-table');
    const table = () => element().querySelector('table');
    const tableHeaderColumns = () => table().querySelectorAll('th');
    const paginator = () => ngMocks.find(fixture.debugElement, MatPaginator).componentInstance;

    describe('Initializing', () => {
        let spyDispatch: jasmine.Spy;
        beforeEach(() => {
            spyDispatch = spyOn(store, 'dispatch').and.callThrough();
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
        });

        it('should trigger football plans fetching', () => {
            expect(spyDispatch).toHaveBeenCalledWith(
                getFootballTrainingPlans({
                    pageEvent: {
                        length: 10,
                        pageSize: 10,
                        pageIndex: 0,
                    },
                })
            );
        });

        it('should have the table', () => {
            expect(table()).toExist();
        });

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
