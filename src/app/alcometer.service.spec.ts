import { TestBed } from '@angular/core/testing';

import { AlcometerService } from './alcometer.service';

describe('AlcometerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlcometerService = TestBed.get(AlcometerService);
    expect(service).toBeTruthy();
  });
});
