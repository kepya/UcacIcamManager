import { TestBed } from '@angular/core/testing';

import { JuryGuard } from './jury.guard';

describe('JuryGuard', () => {
  let guard: JuryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JuryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
