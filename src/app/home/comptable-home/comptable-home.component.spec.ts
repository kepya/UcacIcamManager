import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptableHomeComponent } from './comptable-home.component';

describe('ComptableHomeComponent', () => {
  let component: ComptableHomeComponent;
  let fixture: ComponentFixture<ComptableHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptableHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
