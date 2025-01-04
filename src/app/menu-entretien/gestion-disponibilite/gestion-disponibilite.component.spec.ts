import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDisponibiliteComponent } from './gestion-disponibilite.component';

describe('GestionDisponibiliteComponent', () => {
  let component: GestionDisponibiliteComponent;
  let fixture: ComponentFixture<GestionDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDisponibiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
