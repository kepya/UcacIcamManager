import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervenantEntretienComponent } from './intervenant-entretien.component';

describe('IntervenantEntretienComponent', () => {
  let component: IntervenantEntretienComponent;
  let fixture: ComponentFixture<IntervenantEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervenantEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervenantEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
