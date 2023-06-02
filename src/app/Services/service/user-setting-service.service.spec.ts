import { TestBed } from '@angular/core/testing';

import { UserSettingServiceService } from './user-setting-service.service';

describe('UserSettingServiceService', () => {
  let service: UserSettingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSettingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
