import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCandidatNoteDialogComponent } from './update-candidat-note-dialog.component';

describe('UpdateCandidatNoteDialogComponent', () => {
  let component: UpdateCandidatNoteDialogComponent;
  let fixture: ComponentFixture<UpdateCandidatNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCandidatNoteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCandidatNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
