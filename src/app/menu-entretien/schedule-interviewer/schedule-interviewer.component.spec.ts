import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleInterviewerComponent } from './schedule-interviewer.component';

describe('ScheduleInterviewerComponent', () => {
  let component: ScheduleInterviewerComponent;
  let fixture: ComponentFixture<ScheduleInterviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleInterviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleInterviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
