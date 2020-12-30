import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { TrainingPlansService } from '../../../../shared/services/training-plans/training-plans.service';

export type PlanId = string;

export interface PlanTableItem {
    id: PlanId;
    name: string;
    ageClass: string;
    level: number;
    creator: string;
}

export class FootballPlansContainerDatasource extends DataSource<PlanTableItem> {
    private plansSubject = new BehaviorSubject<PlanTableItem[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    loading$ = this.loadingSubject.asObservable();

    constructor(private readonly trainingPlansService: TrainingPlansService) {
        super();
    }

    connect(): Observable<PlanTableItem[]> {
        return this.plansSubject.asObservable();
    }

    disconnect(): void {
        this.plansSubject.complete();
        this.loadingSubject.complete();
    }

    /**
     * Subject game is needed because dataSource connect called too slow on second load-time.
     */
    loadPlans(): void {
        this.loadingSubject.next(true);

        this.trainingPlansService
            .getPlans$()
            .pipe(
                take(1),
                catchError(() => {
                    this.loadingSubject.next(false);
                    return of([]);
                })
            )
            .subscribe((plans: PlanTableItem[]) => {
                this.loadingSubject.next(false);
                this.plansSubject.next(plans);
            });
    }
}
