import { TestBed } from '@angular/core/testing';

import { concertGuard } from './concert.guard';

describe('concertGuard', () => {
  let guard: concertGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [concertGuard]
    });

    guard = TestBed.inject(concertGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
