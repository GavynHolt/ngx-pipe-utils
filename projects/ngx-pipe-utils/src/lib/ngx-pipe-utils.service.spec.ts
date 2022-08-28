import { TestBed } from '@angular/core/testing';

import { PipeUtilsService } from './ngx-pipe-utils.service';

describe('PipeUtilsService', () => {
  let service: PipeUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PipeUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
