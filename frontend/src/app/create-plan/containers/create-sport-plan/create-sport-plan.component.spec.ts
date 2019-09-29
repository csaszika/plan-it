import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSportPlanComponent } from './create-sport-plan.component';

describe('CreateSportPlanComponent', () => {
  let component: CreateSportPlanComponent;
  let fixture: ComponentFixture<CreateSportPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSportPlanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSportPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
