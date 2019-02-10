import { TestBed } from '@angular/core/testing';

import { Sha256EncryptService } from './sha256-encrypt.service';

describe('Sha256EncryptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Sha256EncryptService = TestBed.get(Sha256EncryptService);
    expect(service).toBeTruthy();
  });
});
