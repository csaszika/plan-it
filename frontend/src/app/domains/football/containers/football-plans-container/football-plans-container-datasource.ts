import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

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
                catchError(() => of([])),
                finalize(() => this.loadingSubject.next(false))
            )
            .subscribe((plans: PlanTableItem[]) => this.plansSubject.next(plans));
    }
}
