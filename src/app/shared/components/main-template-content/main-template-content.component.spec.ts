import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTemplateContentComponent } from './main-template-content.component';

describe('MainTemplateContentComponent', () => {
  let component: MainTemplateContentComponent;
  let fixture: ComponentFixture<MainTemplateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTemplateContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTemplateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
