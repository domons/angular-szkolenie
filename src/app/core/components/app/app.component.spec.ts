import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from '../menu/menu.component';
import { BaseFooterComponent } from '../base-footer/base-footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        SharedModule
      ],
      declarations: [
        AppComponent,
        MenuComponent,
        BaseFooterComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
