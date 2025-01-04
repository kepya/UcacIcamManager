import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionSummaryComponent } from './inscription-summary.component';

describe('InscriptionSummaryComponent', () => {
  let component: InscriptionSummaryComponent;
  let fixture: ComponentFixture<InscriptionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
