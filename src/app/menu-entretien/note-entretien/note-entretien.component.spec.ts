import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEntretienComponent } from './note-entretien.component';

describe('NoteEntretienComponent', () => {
  let component: NoteEntretienComponent;
  let fixture: ComponentFixture<NoteEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
