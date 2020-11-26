import { TestBed } from '@angular/core/testing';

import { cardsService } from './cards.service';

describe('cardsService', () => {
  let service: cardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
