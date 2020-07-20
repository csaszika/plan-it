import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslatePipe } from '@ngx-translate/core';
import { MockComponent, MockModule, MockPipe } from 'ng-mocks';

import { FootballPlansContainerComponent } from './football-plans-container.component';

describe('FootballPlansContainerComponent', () => {
    let component: FootballPlansContainerComponent;
    let fixture: ComponentFixture<FootballPlansContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MockModule(MatTableModule)],
            declarations: [FootballPlansContainerComponent, MockPipe(TranslatePipe), MockComponent(MatIcon)],
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
