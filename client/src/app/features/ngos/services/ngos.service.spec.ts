import { TestBed } from '@angular/core/testing';

import { NgosService } from './ngos.service';

describe('NgosService', () => {
  let service: NgosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
