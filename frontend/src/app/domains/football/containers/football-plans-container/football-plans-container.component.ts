import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { TrainingPlansService } from '../../../../shared/services/training-plans/training-plans.service';
import { FootballPlansContainerDatasource, PlanTableItem } from './football-plans-container-datasource';

@Component({
    selector: 'pi-football-plans-container',
    templateUrl: './football-plans-container.component.html',
    styleUrls: ['./football-plans-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FootballPlansContainer implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatTable, { static: false }) table!: MatTable<PlanTableItem>;
    @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

    dataSource!: FootballPlansContainerDatasource;
    displayedColumns = ['name', 'ageClass', 'level', 'actions'];

    private readonly subscriptions = new Subscription();

    constructor(private readonly trainingPlansService: TrainingPlansService, private readonly changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.dataSource = new FootballPlansContainerDatasource(this.trainingPlansService);
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
}
