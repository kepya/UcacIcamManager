import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdmissibiliteComponent } from './liste-admissibilite.component';

describe('ListeAdmissibiliteComponent', () => {
  let component: ListeAdmissibiliteComponent;
  let fixture: ComponentFixture<ListeAdmissibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdmissibiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdmissibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
