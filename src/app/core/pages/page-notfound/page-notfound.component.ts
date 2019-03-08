import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-notfound',
  templateUrl: './page-notfound.component.html',
  styleUrls: ['./page-notfound.component.css']
})
export class PageNotfoundComponent {

  playerStatus = 'Loading';

  movie = {
    "id": "2zR1GOLhlU4",
    "title": "Hellboy",
    "description": "",
    "thumb_url": "http://i3.ytimg.com/vi/2zR1GOLhlU4/hqdefault.jpg",
    "movie_url": "https://www.youtube.com/embed/2zR1GOLhlU4",

    "year": 2019,
    "duration": 120,
    "rate": 6.66
  };

  handleStatus(e) {
    console.log('test', e);
    switch(e.status) {
      case 'playing':
        this.playerStatus = 'Player is playing';
        break;
      case 'paused':
        this.playerStatus = 'Player is paused';
        break;
      default:
        this.playerStatus = 'Player is idle';
    }
  }

}
