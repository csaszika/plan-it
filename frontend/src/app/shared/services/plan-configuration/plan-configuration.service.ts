import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { FootballPlanConfiguration } from '../../types/plan-configuration.types';

@Injectable({
  providedIn: 'root',
})
export class PlanConfigurationService {
  private readonly planConfigurationRef: AngularFirestoreCollection<FootballPlanConfiguration>;

  constructor(private readonly db: AngularFirestore) {
    this.planConfigurationRef = db.collection('/planConfiguration');
  }

  getPlanConfigurationByFeature(document: string): Observable<any> {
    return this.planConfigurationRef.doc(document).get();
  }
}
