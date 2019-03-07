import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieList } from 'src/app/interfaces/movie-list.interface';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  movies: MovieList = null;

  constructor(
    private moviesService: MoviesService
  ) { }

  addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
      return null;

    return a + b;
  }

  async ngOnInit() {
    this.movies = await this.moviesService.fetchMovies();
  }
}
