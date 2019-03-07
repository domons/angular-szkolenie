import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { JumbotronDirective } from './directives/jumbotron.directive';
import { HideMeDirective } from './directives/hide-me.directive';

import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMovieListComponent } from './pages/page-movie-list/page-movie-list.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';

import { AppComponent } from './components/app/app.component';
import { MoveListComponent } from './components/move-list/move-list.component';
import { MoveListItemComponent } from './components/move-list-item/move-list-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { PageMovieProfileComponent } from './pages/page-movie-profile/page-movie-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    JumbotronDirective,
    HideMeDirective,
    PageMovieListComponent,
    PageContactComponent,
    MoveListComponent,
    MoveListItemComponent,
    MenuComponent,
    PageNotfoundComponent,
    PageMovieProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
