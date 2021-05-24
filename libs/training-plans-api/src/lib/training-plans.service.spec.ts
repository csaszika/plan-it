/* eslint-disable */
import firebase from 'firebase/app';

import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { angularFirestoreStub } from '@plan-it/test-util';

import { TrainingPlan } from '../../../types/training-plan/src/lib/training-plan.types';
import { TrainingPlansService } from './training-plans.service';
import { EMPTY } from 'rxjs';

describe('TrainingPlansService', () => {
    let service: TrainingPlansService;
    /* eslint-disable */
    let spyCollection: jasmine.Spy;
    const firestore = angularFirestoreStub();

    beforeEach(() => {
        spyCollection = spyOn(firestore, 'collection').and.returnValue({
            valueChanges: (): void => {},
            add: (data: TrainingPlan): void => {},
            doc: (id: string): {} => {
                return {
                    delete: (): void => {},
                    update: (): void => {},
                };
            },
        });
    });
    /* eslint-enable */

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TrainingPlansService, { provide: AngularFirestore, useValue: firestore }],
        });
        service = TestBed.inject(TrainingPlansService);
    });

    describe('Initializing', () => {
        it('should be created', () => {
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

            beforeEach(() => {
                spyGetPlans$ = spyOn(firestore.collection(''), 'valueChanges').and.callThrough();
            });

            beforeEach(() => {
                service.getPlans$({
                    length: 10,
                    pageIndex: 0,
                    pageSize: 10,
                });
            });

            it('should called firestore with appropriate params', () => {
                expect(spyGetPlans$).toHaveBeenCalledWith({ idField: 'id' });
            });
        });

        describe('#addPlan', () => {
            let spyAdd: jasmine.Spy;

            beforeEach(() => {
                spyAdd = spyOn(firestore.collection(''), 'add').and.callThrough();
                spyOn(firebase.firestore.Timestamp, 'now').and.returnValue(creationDate);
            });

            beforeEach(() => {
                service.addPlan(mockPlan);
            });

            it('should called firestore with appropriate params', () => {
                expect(spyAdd).toHaveBeenCalledWith(mockPlan);
            });
        });

        describe('#deletePlan$', () => {
            let spyDelete: jasmine.Spy;
            let spyDoc: jasmine.Spy;

            beforeEach(() => {
                /* eslint-disable */
                spyDoc = spyOn(firestore.collection(''), 'doc').and.returnValue({
                    delete: (): void => {},
                    update: (): void => {},
                });
                /* eslint-enable */
                spyDelete = spyOn(firestore.collection('').doc(''), 'delete').and.returnValue(EMPTY);
            });

            beforeEach(() => {
                service.deletePlan$(mockPlan.id);
            });

            it('should called firestore with appropriate params', () => {
                expect(spyDoc).toHaveBeenCalledWith(mockPlan.id);
                expect(spyDelete).toHaveBeenCalled();
            });
        });

        describe('#updatePlan', () => {
            let spyUpdate: jasmine.Spy;
            let spyDoc: jasmine.Spy;

            beforeEach(() => {
                /* eslint-disable */
                spyDoc = spyOn(firestore.collection(''), 'doc').and.returnValue({
                    delete: (): void => {},
                    update: (): void => {},
                });
                /* eslint-enable */
                spyUpdate = spyOn(firestore.collection('').doc(''), 'update').and.callThrough();
            });

            beforeEach(() => {
                service.updatePlan(mockPlan.id, mockPlan);
            });

            it('should called firestore with appropriate params', () => {
                expect(spyDoc).toHaveBeenCalledWith(mockPlan.id);
                expect(spyUpdate).toHaveBeenCalledWith(mockPlan);
            });
        });
    });
});
