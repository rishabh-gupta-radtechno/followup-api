import { TestBed } from '@angular/core/testing';

import { TokenInnterceptorService } from './token-innterceptor.service';

describe('TokenInnterceptorService', () => {
  let service: TokenInnterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInnterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
