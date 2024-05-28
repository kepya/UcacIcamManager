import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementInformationFormComponent } from './paiement-information-form.component';

describe('PaiementInformationFormComponent', () => {
  let component: PaiementInformationFormComponent;
  let fixture: ComponentFixture<PaiementInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
