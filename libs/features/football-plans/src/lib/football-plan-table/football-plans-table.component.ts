import { Subscription } from 'rxjs';

import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { TrainingPlanId, TrainingPlansService } from '@plan-it/training-plans-api';

import { FootballPlansTableDatasource, PlanTableItem } from './football-plans-table-datasource';

@Component({
    selector: 'pi-football-plans-table',
    templateUrl: './football-plans-table.component.html',
    styleUrls: ['./football-plans-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FootballPlansTableComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatTable, { static: false }) table!: MatTable<PlanTableItem>;
    @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

    dataSource!: FootballPlansTableDatasource;
    displayedColumns = ['name', 'ageClass', 'level', 'actions'];

    private readonly subscriptions = new Subscription();

    constructor(
        private readonly trainingPlansService: TrainingPlansService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.dataSource = new FootballPlansTableDatasource(this.trainingPlansService);
        this.dataSource.loadPlans({
            length: 10,
            pageSize: 10,
            pageIndex: 0,
        });
    }

    ngAfterViewInit(): void {
        this.table.dataSource = this.dataSource;
        this.changeDetectorRef.markForCheck();

        this.subscriptions.add(this.paginator.page.subscribe((pageEvent: PageEvent) => this.dataSource.loadPlans(pageEvent)));
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    deletePlan(planId: TrainingPlanId): void {
        this.trainingPlansService.deletePlan(planId);
    }

    openPlan(planId: TrainingPlanId): void {
        this.router.navigate([`football/update/${planId}`]);
    }
}
