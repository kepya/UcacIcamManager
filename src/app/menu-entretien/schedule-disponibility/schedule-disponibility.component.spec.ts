import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDisponibilityComponent } from './schedule-disponibility.component';

describe('ScheduleDisponibilityComponent', () => {
  let component: ScheduleDisponibilityComponent;
  let fixture: ComponentFixture<ScheduleDisponibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleDisponibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDisponibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
