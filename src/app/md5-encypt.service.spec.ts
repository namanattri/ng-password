import { TestBed } from '@angular/core/testing';

import { Md5EncyptService } from './md5-encypt.service';

describe('Md5EncyptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Md5EncyptService = TestBed.get(Md5EncyptService);
    expect(service).toBeTruthy();
  });
});
