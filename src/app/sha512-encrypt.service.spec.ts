import { TestBed } from '@angular/core/testing';

import { Sha512EncryptService } from './sha512-encrypt.service';

describe('Sha512EncryptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Sha512EncryptService = TestBed.get(Sha512EncryptService);
    expect(service).toBeTruthy();
  });
});
