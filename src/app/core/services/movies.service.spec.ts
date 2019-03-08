import { TestBed, flush, fakeAsync } from '@angular/core/testing';

import { MoviesService } from './movies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoviesService', () => {
let service: MoviesService = null;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.get(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchMovies', () => {
    it('should exist', () => {
      expect(service.fetchMovies).toEqual(jasmine.any(Function));
    });

    xit('should returns long list of movies', () => {
      const movies = service.fetchMovies().then((movies) => {
        console.log(movies);
        expect(movies.length).toEqual(3);
      });
      flush();
    });
  });

  describe('fetchMovieById', () => {
    it('should exist', () => {
      expect(service.fetchMovieById).toEqual(jasmine.any(Function));
    });

    it('', () => {
      
    });
  });

  describe('fetchPromoMovies', () => {
    it('should exist', () => {
      expect(service.fetchPromoMovies).toEqual(jasmine.any(Function));
    });

    it('', () => {
      
    });
  });

});
