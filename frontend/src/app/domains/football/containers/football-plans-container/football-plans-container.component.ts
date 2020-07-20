import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { FootballPlansContainerDatasource, PlanTableItem } from './football-plans-container-datasource';

@Component({
    selector: 'pi-football-plans-container',
    templateUrl: './football-plans-container.component.html',
    styleUrls: ['./football-plans-container.component.scss'],
})
export class FootballPlansContainerComponent implements OnInit, AfterViewInit {
    @ViewChild(MatTable, { static: false }) table!: MatTable<PlanTableItem>;
    dataSource!: FootballPlansContainerDatasource;
    plans$: Observable<PlanTableItem[]> = of([
        { id: 'id', name: 'Plany', ageClass: 'U18', level: 4, creator: 'Konci' },
        { id: 'id2', name: 'Awesome plan', ageClass: 'U14', level: 3, creator: 'Majom' },
        // tslint:disable-next-line:no-magic-numbers
    ]).pipe(delay(1000));
    displayedColumns = ['name', 'ageClass', 'level', 'creator', 'actions'];

    ngOnInit(): void {
        this.dataSource = new FootballPlansContainerDatasource(this.plans$);
    }

    ngAfterViewInit(): void {
        this.table.dataSource = this.dataSource;
    }
}
