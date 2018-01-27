import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { filmsReducer } from './state/films.reducer';

import {AppComponent} from './app.component';

import {NavbarComponent} from './components/navbar/navbar.component';
import {FilmListComponent} from './components//film-list/film-list.component';
import {FilmListItemComponent} from './components//film-list-item/film-list-item.component';
import {FilmDetailComponent} from './components//film-detail/film-detail.component';
import {AboutComponent} from './components//about/about.component';
import {Material} from './material/material.module';

import { FilmService } from './services/film.service';
import { RatingComponent } from './rating/rating.component';
import { ThumbsComponent } from './thumbs/thumbs.component';

import {FilmService} from './services/film.service';
import {RatingComponent} from './rating/rating.component';
import { ThumbsDownComponent } from './thumbs-down/thumbs-down.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FilmListComponent,
		FilmListItemComponent,
		FilmDetailComponent,
		AboutComponent,
		RatingComponent,
		ThumbsComponent,
		ThumbsDownComponent
  ],
  imports: [
	  BrowserModule,
  	HttpClientModule,
    Material,
    AppRoutingModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
