import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';

import { angularFirestoreStub } from '../../../test-util/stubs/firestore.stub';
import { TrainingPlan } from '../../types/training-plan.types';
import { TrainingPlansService } from './training-plans.service';

describe('TrainingPlansService', () => {
    let service: TrainingPlansService;
    let spyCollection: jasmine.Spy;
    let firestore: any;

    Given(() => {
        firestore = angularFirestoreStub();
        spyCollection = spyOn(firestore, 'collection').and.returnValue({
            valueChanges: (): void => {},
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
            providers: [TrainingPlansService, { provide: AngularFirestore, useValue: firestore }],
        });
        service = TestBed.inject(TrainingPlansService);
    });

    describe('Initializing', () => {
        Then('should be created', () => {
            expect(service).toBeTruthy();
        });
    });

    describe('Public methods', () => {
        const creationDate = firebase.firestore.Timestamp.fromDate(new Date('2020-10-10'));
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
            createdAt: creationDate,
        };
        describe('#getPlans$', () => {
            let spyGetPlans$: jasmine.Spy;

            Given(() => {
                spyGetPlans$ = spyOn(firestore.collection(''), 'valueChanges').and.callThrough();
            });

            When(() => {
                service.getPlans$({
                    length: 10,
                    pageIndex: 0,
                    pageSize: 10,
                });
            });

            Then('should called firestore with appropriate params', () => {
                expect(spyGetPlans$).toHaveBeenCalledWith({ idField: 'id' });
            });
        });

        describe('#addPlan', () => {
            let spyAdd: jasmine.Spy;

            Given(() => {
                spyAdd = spyOn(firestore.collection(''), 'add').and.callThrough();
                spyOn(firebase.firestore.Timestamp, 'now').and.returnValue(creationDate);
            });

            When(() => {
                service.addPlan(mockPlan);
            });

            Then('should called firestore with appropriate params', () => {
                expect(spyAdd).toHaveBeenCalledWith(mockPlan);
            });
        });

        describe('#deletePlan', () => {
            let spyDelete: jasmine.Spy;
            let spyDoc: jasmine.Spy;

            Given(() => {
                spyDoc = spyOn(firestore.collection(''), 'doc').and.returnValue({
                    delete: (): void => {},
                    update: (): void => {},
                });
                spyDelete = spyOn(firestore.collection('').doc(''), 'delete').and.callThrough();
            });

            When(() => {
                service.deletePlan(mockPlan.id);
            });

            Then('should called firestore with appropriate params', () => {
                expect(spyDoc).toHaveBeenCalledWith(mockPlan.id);
                expect(spyDelete).toHaveBeenCalled();
            });
        });

        describe('#updatePlan', () => {
            let spyUpdate: jasmine.Spy;
            let spyDoc: jasmine.Spy;

            Given(() => {
                spyDoc = spyOn(firestore.collection(''), 'doc').and.returnValue({
                    delete: (): void => {},
                    update: (): void => {},
                });
                spyUpdate = spyOn(firestore.collection('').doc(''), 'update').and.callThrough();
            });

            When(() => {
                service.updatePlan(mockPlan.id, mockPlan);
            });

            Then('should called firestore with appropriate params', () => {
                expect(spyDoc).toHaveBeenCalledWith(mockPlan.id);
                expect(spyUpdate).toHaveBeenCalledWith(mockPlan);
            });
        });
    });
});
