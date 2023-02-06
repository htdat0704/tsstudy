/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidateLoginService } from './validateLogin.service';

describe('Service: ValidateLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateLoginService]
    });
  });

  it('should ...', inject([ValidateLoginService], (service: ValidateLoginService) => {
    expect(service).toBeTruthy();
  }));
});
