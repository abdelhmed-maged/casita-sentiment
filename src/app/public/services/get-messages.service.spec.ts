import { TestBed } from '@angular/core/testing';

import { GetMessagesService } from './get-messages.service';
import { HttpClientModule } from '@angular/common/http';

describe('GetMessagesService', () => {
  let service: GetMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ HttpClientModule ] });
    service = TestBed.inject(GetMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
