import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

import { TrainingPlan, TrainingPlanId } from '../../types/training-plan.types';

@Injectable({
    providedIn: 'root',
})
export class TrainingPlansService {
    private readonly plansRef: AngularFirestoreCollection<TrainingPlan>;

    constructor(private readonly db: AngularFirestore) {
        this.plansRef = db.collection('/trainingPlans');
    }

    addPlan(newPlan: TrainingPlan): Promise<DocumentReference> {
        return this.plansRef.add(newPlan);
    }

    deletePlan(id: TrainingPlanId): Promise<void> {
        return this.plansRef.doc(id).delete();
    }

    updatePlan(id: TrainingPlanId, updatedPlan: Partial<TrainingPlan>): Promise<void> {
        return this.plansRef.doc(id).update(updatedPlan);
    }
}
