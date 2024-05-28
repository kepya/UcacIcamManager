import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementaryInformationFormComponent } from './complementary-information-form.component';

describe('ComplementaryInformationFormComponent', () => {
  let component: ComplementaryInformationFormComponent;
  let fixture: ComponentFixture<ComplementaryInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplementaryInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplementaryInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
