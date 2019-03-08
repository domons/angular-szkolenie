import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveListComponent } from './move-list.component';
import { MoveListItemComponent } from '../move-list-item/move-list-item.component';

describe('MoveListComponent', () => {
  let component: MoveListComponent;
  let fixture: ComponentFixture<MoveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MoveListComponent,
        MoveListItemComponent
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
