import { Spy, createSpyFromClass } from 'jasmine-auto-spies';
import { MockComponent, MockDirective, MockModule, MockPipe } from 'ng-mocks';

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
import { TrainingPlansService } from '@plan-it/training-plans-api';
import { getFootballConfigurations } from '@plan-it/ngrx-actions/football-configuration';
import { PlanConfigurationType } from '@plan-it/types/plan-configuration';
import { TrainingPlan } from '@plan-it/types/training-plan';
import { FootballPlanConfigurationState, FootballState } from '@plan-it/ngrx-store/football';

import { FootballPlanEditorComponent } from './football-plan-editor.component';

@Component({
    template: '<pi-football-plan-form></pi-football-plan-form>',
})
class TestWrapperComponent {
    @ViewChild(FootballPlanEditorComponent, { static: true }) component!: FootballPlanEditorComponent;
}

describe('FootballPlanFormComponent', () => {
    let fixture: ComponentFixture<TestWrapperComponent>;
    const mockTrainingPlansService: Spy<TrainingPlansService> = createSpyFromClass(TrainingPlansService, ['addPlan']);
    let store: Store<FootballState>;

    const initialState = (): FootballPlanConfigurationState => {
        return {
            configuration: { ageClasses: [], levels: [] },
            loading: false,
            error: false,
        };
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MockModule(ReactiveFormsModule), NoopAnimationsModule],
            declarations: [
                TestWrapperComponent,
                FootballPlanEditorComponent,
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
                            footballPlanConfiguration: initialState(),
                        },
                    },
                }),
            ],
        }).compileComponents();
    });

    beforeEach(() => {
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
        beforeEach(() => {
            spyDispatch = spyOn(store, 'dispatch').and.callThrough();
        });

        beforeEach(() => {
            fixture.detectChanges();
        });

        it('should be created', () => {
            expect(element()).toBeTruthy();
        });

        it('should have a form', () => {
            expect(form()).toBeTruthy();
        });

        it('should trigger getting data', () => {
            expect(spyDispatch).toHaveBeenCalledWith(getFootballConfigurations({ configurationType: PlanConfigurationType.FOOTBALL }));
        });
    });

    describe('Events', () => {
        describe('save the plan', () => {
            beforeEach(() => {
                fixture.detectChanges();
                mockTrainingPlansService.addPlan.and.resolveWith({ id: 'mockId' } as DocumentReference<TrainingPlan>);
                saveButton().click();
            });

            it('should call service to save', () => {
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
            beforeEach(() => {
                fixture.detectChanges();
                mockTrainingPlansService.addPlan.and.resolveWith({ id: 'mockId' } as DocumentReference<TrainingPlan>);
                deleteButton().click();
            });

            it('should call service to save', () => {
                expect(mockTrainingPlansService.deletePlan$).toHaveBeenCalledWith('have to come from ngrx');
            });
        });

        describe('update the plan', () => {
            beforeEach(() => {
                fixture.detectChanges();
                updateButton().click();
            });

            it('should call service to save', () => {
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
