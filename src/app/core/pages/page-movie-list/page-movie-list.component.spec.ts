import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';

import { PageMovieListComponent } from './page-movie-list.component';
import { MoveListComponent } from '../../components/move-list/move-list.component';
import { MoveListItemComponent } from '../../components/move-list-item/move-list-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Movie } from '../../interfaces/movie.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;
  let $element: HTMLElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PageMovieListComponent,
        MoveListComponent,
        MoveListItemComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieListComponent);
    component = fixture.componentInstance;
    $element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    $element.remove();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should display thumb list more than three', fakeAsync(() => {
    const movie: Movie = {
      "id": "fake-id",
      "title": "fake-title",
      "description": "fake-description",
      "thumb_url": "fake-thumb_url",
      "movie_url": "fake-movie_url",
      "year": 2019,
      "duration": 130,
      "rate": 7.4
    };

    // 1. Mockowanie
    const movies = [movie, movie, movie, movie, movie, movie, movie];
    component.getMovies = () => Promise.resolve(movies);

    expect(component.movies).toEqual(null);

    // 2. Render ngOnInit
    fixture.detectChanges();

    // 3. Zakończ wszystkie asynchroniczne akcje 
    flush();

    expect(component.movies.length).toBeGreaterThan(3);

    // 4. Aktualizacja widoku
    fixture.detectChanges();

    // 5. Sprawdzenie czy są miniaturki
    const list = $element.querySelectorAll('app-move-list-item');
    expect(list.length).toBeGreaterThan(3);
  }));

});
