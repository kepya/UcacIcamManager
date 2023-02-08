import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionExamenPageComponent } from './session-examen-page.component';

describe('SessionExamenPageComponent', () => {
  let component: SessionExamenPageComponent;
  let fixture: ComponentFixture<SessionExamenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionExamenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionExamenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
