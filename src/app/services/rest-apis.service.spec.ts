import { TestBed } from '@angular/core/testing';

import { RestApisService } from './rest-apis.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('RestApisService', () => {
  let service: RestApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RestApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
