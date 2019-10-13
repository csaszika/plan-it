import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballPlanComponent } from './football-plan.component';

describe('FootballPlanComponent', () => {
  let component: FootballPlanComponent;
  let fixture: ComponentFixture<FootballPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FootballPlanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
