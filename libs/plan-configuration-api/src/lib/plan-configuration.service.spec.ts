import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { angularFirestoreStub } from '@plan-it/test-util';

import { PlanConfigurationService } from './plan-configuration.service';

describe('PlanConfigurationService', () => {
    let service: PlanConfigurationService;
    let firestore = angularFirestoreStub();

    beforeEach(() => {
        firestore = angularFirestoreStub();
        TestBed.configureTestingModule({
            providers: [PlanConfigurationService, { provide: AngularFirestore, useValue: firestore }],
        });
        service = TestBed.inject(PlanConfigurationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
