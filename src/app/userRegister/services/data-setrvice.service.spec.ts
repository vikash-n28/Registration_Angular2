import { TestBed, inject } from '@angular/core/testing';

import { DataSetrviceService } from './data-setrvice.service';

describe('DataSetrviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSetrviceService]
    });
  });

  it('should be created', inject([DataSetrviceService], (service: DataSetrviceService) => {
    expect(service).toBeTruthy();
  }));
});
