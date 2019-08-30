import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatablePlanListComponent } from './creatable-plan-list.component';

describe('CreateablePlanListComponent', () => {
  let component: CreatablePlanListComponent;
  let fixture: ComponentFixture<CreatablePlanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatablePlanListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatablePlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
