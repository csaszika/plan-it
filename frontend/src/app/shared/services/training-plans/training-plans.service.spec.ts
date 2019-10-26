import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';

import { TrainingPlan } from '../../types/training-plan.types';
import { TrainingPlansService } from './training-plans.service';

describe('TrainingPlansService', () => {
  let service: TrainingPlansService;
  let spyCollection: jasmine.Spy;

  const angularFirestoreStub = {
    collection: (path: string): any => {
      return {
        add: (data: TrainingPlan): void => {},
        doc: (id: string): object => {
          return {
            delete: (): void => {},
            update: (): void => {},
          };
        },
      };
    },
  };

  Given(() => {
    spyCollection = spyOn(angularFirestoreStub, 'collection').and.returnValue({
      add: (data: TrainingPlan): void => {},
      doc: (id: string): object => {
        return {
          delete: (): void => {},
          update: (): void => {},
        };
      },
    });
  });

  Given(() => {
    TestBed.configureTestingModule({
      providers: [TrainingPlansService, { provide: AngularFirestore, useValue: angularFirestoreStub }],
    });
    service = TestBed.get(TrainingPlansService);
  });

  describe('Initializing', () => {
    Then('should be created', () => {
      expect(service).toBeTruthy();
      expect(angularFirestoreStub.collection).toHaveBeenCalledWith('/trainingPlans');
    });
  });

  describe('Public methods', () => {
    const mockPlan: TrainingPlan = {
      id: '',
      name: 'plan name',
      description: 'description',
      goal: 'goal',
      ageClass: 'U7',
      level: 2,
      steps: [
        {
          name: 'stepName',
          description: 'step description',
        },
      ],
    };
    describe('#addPlan', () => {
      let spyAdd: jasmine.Spy;

      Given(() => {
        spyAdd = spyOn(angularFirestoreStub.collection(''), 'add').and.callThrough();
      });

      When(() => {
        service.addPlan(mockPlan);
      });

      Then('should be created', () => {
        expect(spyAdd).toHaveBeenCalledWith(mockPlan);
      });
    });

    describe('#deletePlan', () => {
      let spyDelete: jasmine.Spy;
      let spyDoc: jasmine.Spy;

      Given(() => {
        spyDoc = spyOn(angularFirestoreStub.collection(''), 'doc').and.returnValue({
          delete: (): void => {},
          update: (): void => {},
        });
        spyDelete = spyOn(angularFirestoreStub.collection('').doc(''), 'delete').and.callThrough();
      });

      When(() => {
        service.deletePlan(mockPlan.id);
      });

      Then('should be created', () => {
        expect(spyDoc).toHaveBeenCalledWith(mockPlan.id);
        expect(spyDelete).toHaveBeenCalled();
      });
    });

    describe('#updatePlan', () => {
      let spyUpdate: jasmine.Spy;
      let spyDoc: jasmine.Spy;

      Given(() => {
        spyDoc = spyOn(angularFirestoreStub.collection(''), 'doc').and.returnValue({
          delete: (): void => {},
          update: (): void => {},
        });
        spyUpdate = spyOn(angularFirestoreStub.collection('').doc(''), 'update').and.callThrough();
      });

      When(() => {
        service.updatePlan(mockPlan.id, mockPlan);
      });

      Then('should be created', () => {
        expect(spyDoc).toHaveBeenCalledWith(mockPlan.id);
        expect(spyUpdate).toHaveBeenCalledWith(mockPlan);
      });
    });
  });
});
