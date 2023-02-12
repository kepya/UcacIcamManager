import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierDisponibiliteComponent } from './calendrier-disponibilite.component';

describe('CalendrierDisponibiliteComponent', () => {
  let component: CalendrierDisponibiliteComponent;
  let fixture: ComponentFixture<CalendrierDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierDisponibiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
