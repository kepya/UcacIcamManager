import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineNoteInterviewComponent } from './define-note-interview.component';

describe('DefineNoteInterviewComponent', () => {
  let component: DefineNoteInterviewComponent;
  let fixture: ComponentFixture<DefineNoteInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineNoteInterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineNoteInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
