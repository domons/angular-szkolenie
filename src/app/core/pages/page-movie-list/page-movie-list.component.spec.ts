import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovieListComponent } from './page-movie-list.component';
import { MoveListComponent } from '../../components/move-list/move-list.component';
import { MoveListItemComponent } from '../../components/move-list-item/move-list-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PageMovieListComponent', () => {
  let component: PageMovieListComponent;
  let fixture: ComponentFixture<PageMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PageMovieListComponent,
        MoveListComponent,
        MoveListItemComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
