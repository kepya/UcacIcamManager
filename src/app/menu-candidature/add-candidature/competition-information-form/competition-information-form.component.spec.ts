import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionInformationFormComponent } from './competition-information-form.component';

describe('CompetitionInformationFormComponent', () => {
  let component: CompetitionInformationFormComponent;
  let fixture: ComponentFixture<CompetitionInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitionInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitionInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
