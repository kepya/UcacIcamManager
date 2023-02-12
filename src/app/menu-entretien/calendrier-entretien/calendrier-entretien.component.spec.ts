import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierEntretienComponent } from './calendrier-entretien.component';

describe('CalendrierEntretienComponent', () => {
  let component: CalendrierEntretienComponent;
  let fixture: ComponentFixture<CalendrierEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
