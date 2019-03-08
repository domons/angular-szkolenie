import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PageHomeComponent } from './page-home.component';
import { MoveListComponent } from '../../components/move-list/move-list.component';
import { MoveListItemComponent } from '../../components/move-list-item/move-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PageHomeComponent,
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
    fixture = TestBed.createComponent(PageHomeComponent);
    console.log('komponent stworzony');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
