import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { DataSource } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { TrainingPlansService } from '@plan-it/training-plans-api';

export type PlanId = string;

export interface PlanTableItem {
    id: PlanId;
    name: string;
    ageClass: string;
    level: number;
    creator: string;
}

export class FootballPlansTableDatasource extends DataSource<PlanTableItem> {
    private readonly plansSubject$ = new BehaviorSubject<PlanTableItem[]>([]);
    private readonly loadingSubject$ = new BehaviorSubject<boolean>(false);

    readonly loading$ = this.loadingSubject$.asObservable();

    constructor(private readonly trainingPlansService: TrainingPlansService) {
        super();
    }

    connect(): Observable<PlanTableItem[]> {
        return this.plansSubject$.asObservable();
    }

    disconnect(): void {
        this.plansSubject$.complete();
        this.loadingSubject$.complete();
    }

    /**
     * Subject game is needed because dataSource connect called too slow on second load-time.
     */
    loadPlans(pageEvent: PageEvent): void {
        this.loadingSubject$.next(true);

        this.trainingPlansService
            .getPlans$(pageEvent)
            .pipe(
                take(1),
                catchError(() => {
                    this.loadingSubject$.next(false);
                    return of([]);
                })
            )
            .subscribe((plans: PlanTableItem[]) => {
                this.loadingSubject$.next(false);
                this.plansSubject$.next(plans);
            });
    }
}
