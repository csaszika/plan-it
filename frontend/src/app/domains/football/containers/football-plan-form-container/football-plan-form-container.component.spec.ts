import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatCard } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatStep, MatVerticalStepper } from '@angular/material/stepper';
import { TranslatePipe } from '@ngx-translate/core';
import { componentTestingSetup } from 'angular-unit-component-driver';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { MockComponent, MockDirective, MockModule, MockPipe } from 'ng-mocks';

import { TrainingPlansService } from '../../../../shared/services/training-plans/training-plans.service';
import { FootballPlanFormContainerComponent } from './football-plan-form-container.component';
import { FootballPlanFormContainerComponentDriver } from './football-plan-form-container.component.driver';

const componentSetup = (mockTrainingPlansService: Spy<TrainingPlansService>): FootballPlanFormContainerComponentDriver => {
  return componentTestingSetup({
    componentClass: FootballPlanFormContainerComponent,
    driver: FootballPlanFormContainerComponentDriver,
    imports: [MockModule(ReactiveFormsModule)],
    providers: [{ provide: TrainingPlansService, useValue: mockTrainingPlansService }],
    declarations: [
      MockComponent(MatVerticalStepper),
      MockComponent(MatStep),
      MockComponent(MatButtonToggleGroup),
      MockComponent(MatButtonToggle),
      MockComponent(MatFormField),
      MockComponent(MatLabel),
      MockComponent(MatError),
      MockComponent(MatCard),
      MockDirective(MatButton),
      MockDirective(CdkTextareaAutosize),
      MockPipe(TranslatePipe),
    ],
  });
};

describe('FootballPlanComponent', () => {
  let driver: FootballPlanFormContainerComponentDriver;
  const mockTrainingPlansService: Spy<TrainingPlansService> = createSpyFromClass(TrainingPlansService, ['addPlan']);

  Given(() => {
    driver = componentSetup(mockTrainingPlansService);
  });

  describe('Initializing', () => {
    Given(() => {});

    When(() => {
      driver.detectChanges();
    });

    Then('should be created', () => {
      expect(driver.componentInstance).toBeTruthy();
    });
  });

  // TODO something wrong with jasmine-auto-spies
  // describe('Events', () => {
  //   Given(() => {});
  //
  //   When(() => {
  //     driver.detectChanges();
  //     mockTrainingPlansService.addPlan.and.resolveWith({ id: 'mockId' } as DocumentReference);
  //     driver.saveButton.click();
  //   });
  //
  //   Then('should call service to save', () => {
  //     expect(mockTrainingPlansService.addPlan).toHaveBeenCalledWith({
  //       name: '',
  //       description: '',
  //       goal: '',
  //       level: '',
  //       ageClass: '',
  //       steps: [],
  //     });
  //   });
  // });
});
