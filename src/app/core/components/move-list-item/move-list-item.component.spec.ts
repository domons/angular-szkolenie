import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveListItemComponent } from './move-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MoveListItemComponent', () => {
  let component: MoveListItemComponent;
  let fixture: ComponentFixture<MoveListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MoveListItemComponent 
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveListItemComponent);
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
