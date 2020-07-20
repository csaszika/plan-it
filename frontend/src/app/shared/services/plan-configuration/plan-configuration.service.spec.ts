import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { angularFirestoreStub } from '../../../test-util/stubs/firestore.stub';
import { PlanConfigurationService } from './plan-configuration.service';

describe('PlanConfigurationService', () => {
    let service: PlanConfigurationService;
    let firestore: any = angularFirestoreStub();

    Given(() => {
        firestore = angularFirestoreStub();
        TestBed.configureTestingModule({
            providers: [PlanConfigurationService, { provide: AngularFirestore, useValue: firestore }],
        });
        service = TestBed.inject(PlanConfigurationService);
    });

    Then('should be created', () => {
        expect(service).toBeTruthy();
    });
});
