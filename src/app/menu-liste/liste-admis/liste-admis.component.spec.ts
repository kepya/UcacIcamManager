import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAdmisComponent } from './liste-admis.component';

describe('ListeAdmisComponent', () => {
  let component: ListeAdmisComponent;
  let fixture: ComponentFixture<ListeAdmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAdmisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAdmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
