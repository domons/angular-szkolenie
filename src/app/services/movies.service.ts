import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { MovieList } from '../interfaces/movie-list.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  fetchMovies() {
    return this.http.get<MovieList>('/assets/movies.json').toPromise();
  }

  async fetchMovieById(movieId: string) {
    const movies = await this.fetchMovies();
    return movies.find((movie) => movie.id === movieId);
  }
}
