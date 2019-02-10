import { TestBed } from '@angular/core/testing';

import { CopyToClipboardService } from './copy-to-clipboard.service';

describe('CopyToClipboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CopyToClipboardService = TestBed.get(CopyToClipboardService);
    expect(service).toBeTruthy();
  });
});
