import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.css']
})
export class MoveListComponent implements OnInit {

  movieList = [
    {
      title: 'Film #1',
      description: 'Lorem ipsum 1',
      image: 'https://avatars0.githubusercontent.com/u/10672914?s=460&v=4',
    },
    {
      title: 'Film #2',
      description: 'Lorem ipsum 2',
      image: 'https://avatars0.githubusercontent.com/u/10672914?s=460&v=4',
    },
    {
      title: 'Film #3',
      description: 'Lorem ipsum 3',
      image: 'https://avatars0.githubusercontent.com/u/10672914?s=460&v=4',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
