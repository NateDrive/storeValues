import { TestBed } from '@angular/core/testing';

import { MealStorageService } from './meal-storage.service';

describe('MealStorageService', () => {
  let service: MealStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
