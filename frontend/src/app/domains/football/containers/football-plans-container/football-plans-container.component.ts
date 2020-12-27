import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { TrainingPlansService } from '../../../../shared/services/training-plans/training-plans.service';
import { FootballPlansContainerDatasource, PlanTableItem } from './football-plans-container-datasource';

@Component({
    selector: 'pi-football-plans-container',
    templateUrl: './football-plans-container.component.html',
    styleUrls: ['./football-plans-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FootballPlansContainer implements OnInit, AfterViewInit {
    @ViewChild(MatTable, { static: false }) table!: MatTable<PlanTableItem>;
    dataSource!: FootballPlansContainerDatasource;
    displayedColumns = ['name', 'ageClass', 'level', 'actions'];

    constructor(private readonly trainingPlansService: TrainingPlansService, private readonly changeDetectorRef: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.dataSource = new FootballPlansContainerDatasource(this.trainingPlansService);
        this.dataSource.loadPlans();
    }

    ngAfterViewInit(): void {
        this.table.dataSource = this.dataSource;
        this.changeDetectorRef.markForCheck();
    }
}
