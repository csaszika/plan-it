import firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, Query } from '@angular/fire/firestore';
import { PageEvent } from '@angular/material/paginator';

import { TrainingPlan, TrainingPlanId } from './training-plan.types';

@Injectable({
    providedIn: 'root',
})
export class TrainingPlansService {
    private readonly COLLECTION_KEY = '/trainingPlans';

    constructor(private readonly afs: AngularFirestore) {}

    getPlans$(event: PageEvent): Observable<TrainingPlan[]> {
        return this.afs
            .collection<TrainingPlan>(this.COLLECTION_KEY, (ref: Query) =>
                ref.orderBy('createdAt').startAt(event.pageIndex).limit(event.pageSize)
            )
            .valueChanges({ idField: 'id' });
    }

    addPlan(newPlan: TrainingPlan): Promise<DocumentReference<TrainingPlan>> {
        return this.afs.collection(this.COLLECTION_KEY).add({
            ...newPlan,
            createdAt: firebase.firestore.Timestamp.now(),
        }) as Promise<DocumentReference<TrainingPlan>>;
    }

    deletePlan(id: TrainingPlanId): Promise<void> {
        return this.afs.collection(this.COLLECTION_KEY).doc(id).delete();
    }

    updatePlan(id: TrainingPlanId, updatedPlan: Partial<TrainingPlan>): Promise<void> {
        return this.afs.collection(this.COLLECTION_KEY).doc(id).update(updatedPlan);
    }
}
