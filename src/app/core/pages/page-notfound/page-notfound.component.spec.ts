import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotfoundComponent } from './page-notfound.component';
import { VideoPlayerComponent } from '../../components/video-player/video-player.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PageNotfoundComponent', () => {
  let component: PageNotfoundComponent;
  let fixture: ComponentFixture<PageNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PageNotfoundComponent,
        VideoPlayerComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
