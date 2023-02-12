import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryMemberComponent } from './jury-member.component';

describe('JuryMemberComponent', () => {
  let component: JuryMemberComponent;
  let fixture: ComponentFixture<JuryMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuryMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
