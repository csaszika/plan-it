import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

export type PlanId = string;

export interface PlanTableItem {
    id: PlanId;
    name: string;
    ageClass: string;
    level: number;
    creator: string;
}

export class FootballPlansContainerDatasource extends DataSource<PlanTableItem> {
    constructor(private readonly plans$: Observable<PlanTableItem[]>) {
        super();
    }

    connect(): Observable<PlanTableItem[]> {
        return this.plans$;
    }

    disconnect(): void {}
}
