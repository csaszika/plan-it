import { Subscription } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { FootballState } from '@plan-it/ngrx-store/football';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { selectFootballTrainingPlans } from '@plan-it/ngrx-store/football';
import { TrainingPlansService } from '@plan-it/training-plans-api';
import { TrainingPlanId } from '@plan-it/types/training-plan';
import { deleteFootballTrainingPlan, getFootballTrainingPlans } from '@plan-it/ngrx-actions/football-training-plans';

@Component({
    selector: 'pi-football-plans-table',
    templateUrl: './football-plans-table.component.html',
    styleUrls: ['./football-plans-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FootballPlansTableComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

    footballPlans$ = this.store.pipe(select(selectFootballTrainingPlans));

    displayedColumns = ['name', 'ageClass', 'level', 'actions'];

    private readonly subscriptions = new Subscription();

    constructor(
        private readonly store: Store<FootballState>,
        private readonly trainingPlansService: TrainingPlansService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.store.dispatch(
            getFootballTrainingPlans({
                pageEvent: {
                    length: 10,
                    pageSize: 10,
                    pageIndex: 0,
                },
            })
        );
    }

    ngAfterViewInit(): void {
        this.changeDetectorRef.markForCheck();

        this.subscriptions.add(
            this.paginator.page.subscribe((pageEvent: PageEvent) => {
                this.store.dispatch(getFootballTrainingPlans({ pageEvent }));
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    deletePlan(planId: TrainingPlanId): void {
        this.store.dispatch(deleteFootballTrainingPlan({ planId }));
    }

    openPlan(planId: TrainingPlanId): void {
        this.router.navigate([`football/update/${planId}`]);
    }
}
