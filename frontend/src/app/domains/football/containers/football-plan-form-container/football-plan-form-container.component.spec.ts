import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocumentReference } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatCard } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatStep, MatVerticalStepper } from '@angular/material/stepper';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { MockComponent, MockDirective, MockModule, MockPipe } from 'ng-mocks';

import { TrainingPlansService } from '../../../../shared/services/training-plans/training-plans.service';
import { PlanConfigurationType } from '../../../../shared/types/plan-configuration.types';
import { FootballState } from '../../ngrx';
import { getFootballConfigurations } from '../../ngrx/plan-configurations/football-plan-configuration.actions';
import { initialState as footballPlanConfigurationInitialState } from '../../ngrx/plan-configurations/football-plan-configuration.reducer';
import { FootballPlanFormContainerComponent } from './football-plan-form-container.component';

@Component({
    template: '<pi-football-plan-form></pi-football-plan-form>',
})
class TestWrapperComponent {
    @ViewChild(FootballPlanFormContainerComponent, { static: true }) component!: FootballPlanFormContainerComponent;
}

describe('FootballPlanFormComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    const mockTrainingPlansService: Spy<TrainingPlansService> = createSpyFromClass(TrainingPlansService, ['addPlan']);
    let store: Store<FootballState>;

    Given(() => {
        TestBed.configureTestingModule({
            imports: [MockModule(ReactiveFormsModule), NoopAnimationsModule],
            declarations: [
                TestWrapperComponent,
                FootballPlanFormContainerComponent,
                MockComponent(MatVerticalStepper),
                MockComponent(MatStep),
                MockComponent(MatButtonToggleGroup),
                MockComponent(MatButtonToggle),
                MockComponent(MatFormField),
                MockComponent(MatLabel),
                MockComponent(MatError),
                MockComponent(MatCard),
                MockComponent(MatProgressBar),
                MockDirective(MatButton),
                MockDirective(CdkTextareaAutosize),
                MockPipe(TranslatePipe),
            ],
            providers: [
                { provide: TrainingPlansService, useValue: mockTrainingPlansService },
                provideMockStore({
                    initialState: {
                        football: {
                            footballPlanConfiguration: footballPlanConfigurationInitialState(),
                        },
                    },
                }),
            ],
        }).compileComponents();
    });

    Given(() => {
        fixture = TestBed.createComponent(TestWrapperComponent);
        store = TestBed.inject(Store);
    });

    const element = () => fixture.nativeElement.querySelector('pi-football-plan-form');
    const form = () => element().querySelector('form');
    const saveButton = () => element().querySelector('button[name=save-plan]');
    const deleteButton = () => element().querySelector('button[name=delete-plan]');
    const updateButton = () => element().querySelector('button[name=update-plan]');

    describe('Initializing', () => {
        let spyDispatch: jasmine.Spy;
        Given(() => {
            spyDispatch = spyOn(store, 'dispatch').and.callThrough();
        });

        When(() => {
            fixture.detectChanges();
        });

        Then('should be created', () => {
            expect(element()).toBeTruthy();
        });

        Then('should have a form', () => {
            expect(form()).toBeTruthy();
        });

        Then('should trigger getting data', () => {
            expect(spyDispatch).toHaveBeenCalledWith(getFootballConfigurations({ configurationType: PlanConfigurationType.FOOTBALL }));
        });
    });

    describe('Events', () => {
        describe('save the plan', () => {
            When(() => {
                fixture.detectChanges();
                mockTrainingPlansService.addPlan.and.resolveWith({ id: 'mockId' } as DocumentReference);
                saveButton().click();
            });

            Then('should call service to save', () => {
                expect(mockTrainingPlansService.addPlan).toHaveBeenCalledWith({
                    name: '',
                    description: '',
                    goal: '',
                    level: '',
                    ageClass: '',
                    steps: [],
                });
            });
        });

        describe('delete the plan', () => {
            When(() => {
                fixture.detectChanges();
                mockTrainingPlansService.addPlan.and.resolveWith({ id: 'mockId' } as DocumentReference);
                deleteButton().click();
            });

            Then('should call service to save', () => {
                expect(mockTrainingPlansService.deletePlan).toHaveBeenCalledWith('have to come from ngrx');
            });
        });

        describe('update the plan', () => {
            When(() => {
                fixture.detectChanges();
                updateButton().click();
            });

            Then('should call service to save', () => {
                expect(mockTrainingPlansService.updatePlan).toHaveBeenCalledWith('have to come from ngrx', {
                    ageClass: '',
                    description: '',
                    goal: '',
                    level: '',
                    name: '',
                    steps: [],
                });
            });
        });
    });
});
