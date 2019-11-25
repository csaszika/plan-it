import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballPlansContainerComponent } from './football-plans-container.component';

describe('FootballPlansContainerComponent', () => {
  let component: FootballPlansContainerComponent;
  let fixture: ComponentFixture<FootballPlansContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FootballPlansContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballPlansContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
