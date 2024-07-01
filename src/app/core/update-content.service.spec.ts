import { TestBed } from '@angular/core/testing';

import { UpdateContentService } from './update-content.service';

describe('UpdateContentService', () => {
  let service: UpdateContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
