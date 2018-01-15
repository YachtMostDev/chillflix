import { TestBed, inject } from '@angular/core/testing';

import { FilmServiceService } from './film-service.service';

describe('FilmServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmServiceService]
    });
  });

  it('should be created', inject([FilmServiceService], (service: FilmServiceService) => {
    expect(service).toBeTruthy();
  }));
});
