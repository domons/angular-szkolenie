import { Component, OnInit, Input, ElementRef, EventEmitter, Output, HostBinding, ViewChild } from '@angular/core';
import { Movie } from 'src/app/core/interfaces/movie.interface';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() movie: Movie;
  @Output() status = new EventEmitter();
  @ViewChild('player') player = null;

  movieUrl = 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';

  constructor(
    private $element: ElementRef
  ) { }

  ngOnInit() {
  }

  play() {
    this.player.nativeElement.play();
    this.status.next({ status: 'playing' });
  }

  pause() {
    this.player.nativeElement.pause();
    this.status.next({ status: 'paused' });
  }

  fullscreen() {
    if ( ! document['fullscreenElement'])
      this.$element.nativeElement.requestFullscreen();
    else
      document.exitFullscreen();
  }
}
