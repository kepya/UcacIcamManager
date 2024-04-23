import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEpreuveComponent } from './gestion-epreuve.component';

describe('GestionEpreuveComponent', () => {
  let component: GestionEpreuveComponent;
  let fixture: ComponentFixture<GestionEpreuveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEpreuveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEpreuveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
