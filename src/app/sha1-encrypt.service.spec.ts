import { TestBed } from '@angular/core/testing';

import { Sha1EncryptService } from './sha1-encrypt.service';

describe('Sha1EncryptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Sha1EncryptService = TestBed.get(Sha1EncryptService);
    expect(service).toBeTruthy();
  });
});
