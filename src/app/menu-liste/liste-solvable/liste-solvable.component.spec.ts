import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSolvableComponent } from './liste-solvable.component';

describe('ListeSolvableComponent', () => {
  let component: ListeSolvableComponent;
  let fixture: ComponentFixture<ListeSolvableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSolvableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSolvableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
