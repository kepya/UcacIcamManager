import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSolvableComponent } from './gestion-solvable.component';

describe('GestionSolvableComponent', () => {
  let component: GestionSolvableComponent;
  let fixture: ComponentFixture<GestionSolvableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSolvableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSolvableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
