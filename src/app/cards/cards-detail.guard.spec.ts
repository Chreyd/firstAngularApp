import { TestBed } from '@angular/core/testing';

import { CardsDetailGuard } from './cards-detail.guard';

describe('CardsDetailGuard', () => {
  let guard: CardsDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CardsDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
