import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-move-list-item',
  templateUrl: './move-list-item.component.html',
  styleUrls: ['./move-list-item.component.css']
})
export class MoveListItemComponent implements OnInit {

  @Input() movie: Movie = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirectMovieProfile() {
    this.router.navigateByUrl('/movies/' + this.movie.id);
  }

}
