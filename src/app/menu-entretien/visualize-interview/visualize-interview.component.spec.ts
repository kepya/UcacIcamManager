import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeInterviewComponent } from './visualize-interview.component';

describe('VisualizeInterviewComponent', () => {
  let component: VisualizeInterviewComponent;
  let fixture: ComponentFixture<VisualizeInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
