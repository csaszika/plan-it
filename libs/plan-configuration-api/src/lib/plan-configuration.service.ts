import firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FootballPlanConfiguration } from '@plan-it/types/plan-configuration';

import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

@Injectable({
    providedIn: 'root',
})
export class PlanConfigurationService {
    private readonly planConfigurationRef: AngularFirestoreCollection<FootballPlanConfiguration>;

    constructor(private readonly db: AngularFirestore) {
        this.planConfigurationRef = db.collection('/planConfiguration');
    }

    getPlanConfigurationByFeature$(document: string): Observable<DocumentSnapshot<FootballPlanConfiguration>> {
        return this.planConfigurationRef.doc(document).get();
    }
}
