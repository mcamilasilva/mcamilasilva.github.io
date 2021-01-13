import { TestBed } from '@angular/core/testing';

import { SystemLanguageService } from './language.service';

describe('LanguageService', () => {
  let service: SystemLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
