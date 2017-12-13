import { TestBed, inject } from '@angular/core/testing';

import { CascadeService } from './cascade.service';

describe('CascadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CascadeService]
    });
  });

  it('should be created', inject([CascadeService], (service: CascadeService) => {
    expect(service).toBeTruthy();
  }));
});
