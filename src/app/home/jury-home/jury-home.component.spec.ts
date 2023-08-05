import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryHomeComponent } from './jury-home.component';

describe('JuryHomeComponent', () => {
  let component: JuryHomeComponent;
  let fixture: ComponentFixture<JuryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
