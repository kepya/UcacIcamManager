import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreExamenPageComponent } from './centre-examen-page.component';

describe('CentreExamenPageComponent', () => {
  let component: CentreExamenPageComponent;
  let fixture: ComponentFixture<CentreExamenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreExamenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreExamenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
