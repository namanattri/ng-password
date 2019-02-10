import { TestBed } from '@angular/core/testing';

import { PinGeneratorService } from './pin-generator.service';

describe('PinGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PinGeneratorService = TestBed.get(PinGeneratorService);
    expect(service).toBeTruthy();
  });
});
