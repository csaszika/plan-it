import { CdkTextareaAutosize } from '@angular/cdk/text-field';
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
import { componentTestingSetup } from 'angular-unit-component-driver';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { MockComponent, MockDirective, MockModule, MockPipe } from 'ng-mocks';

import { TrainingPlansService } from '../../../../shared/services/training-plans/training-plans.service';
import { PlanConfigurationType } from '../../../../shared/types/plan-configuration.types';
import { FootballState } from '../../ngrx';
import { getFootballConfigurations } from '../../ngrx/plan-configurations/football-plan-configuration.actions';
import { initialState as footballPlanConfigurationInitialState } from '../../ngrx/plan-configurations/football-plan-configuration.reducer';
import { FootballPlanFormContainerComponent } from './football-plan-form-container.component';
import { FootballPlanFormContainerComponentDriver } from './football-plan-form-container.component.driver';
import {DocumentReference} from "@angular/fire/firestore";

const componentSetup = (mockTrainingPlansService: Spy<TrainingPlansService>): FootballPlanFormContainerComponentDriver => {
    return componentTestingSetup({
        componentClass: FootballPlanFormContainerComponent,
        driver: FootballPlanFormContainerComponentDriver,
        imports: [MockModule(ReactiveFormsModule), NoopAnimationsModule],
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
        declarations: [
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
    });
};

describe('FootballPlanFormComponent', () => {
    let driver: FootballPlanFormContainerComponentDriver;
    const mockTrainingPlansService: Spy<TrainingPlansService> = createSpyFromClass(TrainingPlansService, ['addPlan']);
    let store: Store<FootballState>;

    Given(() => {
        driver = componentSetup(mockTrainingPlansService);
        store = driver.injector.get(Store);
    });

    describe('Initializing', () => {
        let spyDispatch: jasmine.Spy;
        Given(() => {
            spyDispatch = spyOn(store, 'dispatch').and.callThrough();
        });

        When(() => {
            driver.detectChanges();
        });

        Then('should be created', () => {
            expect(driver.componentInstance).toBeTruthy();
        });

        Then('should have a form', () => {
            expect(driver.form).toBeTruthy();
        });

        Then('should trigger getting data', () => {
            expect(spyDispatch).toHaveBeenCalledWith(getFootballConfigurations({ configurationType: PlanConfigurationType.FOOTBALL }));
        });
    });

    // TODO something wrong with jasmine-auto-spies
    describe('Events', () => {
      Given(() => {});

      When(() => {
        driver.detectChanges();
        mockTrainingPlansService.addPlan.and.resolveWith({ id: 'mockId' } as DocumentReference);
        driver.saveButton.click();
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
});
