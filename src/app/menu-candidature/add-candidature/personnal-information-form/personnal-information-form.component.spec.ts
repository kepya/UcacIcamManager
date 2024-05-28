import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalInformationFormComponent } from './personnal-information-form.component';

describe('PersonnalInformationFormComponent', () => {
  let component: PersonnalInformationFormComponent;
  let fixture: ComponentFixture<PersonnalInformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnalInformationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnalInformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
