import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdmissibiliteComponent } from './gestion-admissibilite.component';

describe('GestionAdmissibiliteComponent', () => {
  let component: GestionAdmissibiliteComponent;
  let fixture: ComponentFixture<GestionAdmissibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAdmissibiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdmissibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
