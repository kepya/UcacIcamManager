import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursDialogComponent } from './parcours-dialog.component';

describe('ParcoursDialogComponent', () => {
  let component: ParcoursDialogComponent;
  let fixture: ComponentFixture<ParcoursDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcoursDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
