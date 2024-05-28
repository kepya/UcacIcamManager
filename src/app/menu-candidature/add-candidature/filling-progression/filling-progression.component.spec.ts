import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingProgressionComponent } from './filling-progression.component';

describe('FillingProgressionComponent', () => {
  let component: FillingProgressionComponent;
  let fixture: ComponentFixture<FillingProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillingProgressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillingProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
