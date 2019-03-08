import { async, ComponentFixture, TestBed, fakeAsync, flush } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PageHomeComponent } from './page-home.component';
import { MoveListComponent } from '../../components/move-list/move-list.component';
import { MoveListItemComponent } from '../../components/move-list-item/move-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../../interfaces/movie.interface';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;
  let $element: HTMLElement = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageHomeComponent,
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
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    $element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    $element.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display thumb list', fakeAsync(() => {
    const movie: Movie = {
      "id": "fake-id",
      "title": "fake-title",
      "description": "fake-description",
      "thumb_url": "fake-thumb_url",
      "movie_url": "fake-movie_url",
      "year": 2019,
      "duration": 130,
      "rate": 7
    };

    // 1. Mockowanie
    const movies = [movie, movie, movie];
    component.getPromoMovies = () => Promise.resolve(movies);

    expect(component.movies).toEqual(null);

    // 2. Render ngOnInit
    fixture.detectChanges();

    // 3. Zakończ wszystkie asynchroniczne akcje 
    flush();

    expect(component.movies.length).toEqual(3);

    // 4. Aktualizacja widoku
    fixture.detectChanges();

    console.log($element);

    // 5. Sprawdzenie czy są miniaturki
    const list = $element.querySelectorAll('app-move-list-item');

    expect(list.length).toEqual(3);
  }));

});
