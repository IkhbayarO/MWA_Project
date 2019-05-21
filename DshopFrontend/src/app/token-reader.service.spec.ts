import { TestBed } from '@angular/core/testing';

import { TokenReaderService } from './token-reader.service';

describe('TokenReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenReaderService = TestBed.get(TokenReaderService);
    expect(service).toBeTruthy();
  });
});
