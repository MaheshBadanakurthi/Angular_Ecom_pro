import { TestBed } from '@angular/core/testing';

import { MyproductapiService } from './myproductapi.service';

describe('MyproductapiService', () => {
  let service: MyproductapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyproductapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
