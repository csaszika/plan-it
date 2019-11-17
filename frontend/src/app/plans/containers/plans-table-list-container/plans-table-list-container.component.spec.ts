import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansTableListContainerComponent } from './plans-table-list-container.component';

describe('PlansTableListContainerComponent', () => {
  let component: PlansTableListContainerComponent;
  let fixture: ComponentFixture<PlansTableListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlansTableListContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansTableListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
