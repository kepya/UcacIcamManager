import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdmisComponent } from './gestion-admis.component';

describe('GestionAdmisComponent', () => {
  let component: GestionAdmisComponent;
  let fixture: ComponentFixture<GestionAdmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAdmisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
