import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MovieList } from 'src/app/interfaces/movie-list.interface';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoveListComponent implements OnInit {

  @Input() movies: MovieList = null;

  constructor() { }

  ngOnInit() {
  }

}
