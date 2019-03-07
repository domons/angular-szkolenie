import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-move-list-item',
  templateUrl: './move-list-item.component.html',
  styleUrls: ['./move-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoveListItemComponent implements OnInit {

  @Input() movie: Movie = null;

  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.movie.rate = 10;
      this.changeDetector.markForCheck();
    }, 2000);
  }

  redirectMovieProfile() {
    this.router.navigateByUrl('/movies/' + this.movie.id);
  }

  buildRate() {
    console.log(1);
    return this.movie.rate * 10 + '%';
  }
}
