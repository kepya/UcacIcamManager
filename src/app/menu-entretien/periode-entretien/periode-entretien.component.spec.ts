import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeEntretienComponent } from './periode-entretien.component';

describe('PeriodeEntretienComponent', () => {
  let component: PeriodeEntretienComponent;
  let fixture: ComponentFixture<PeriodeEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodeEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodeEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
