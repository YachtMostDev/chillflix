import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {filmsReducer} from './state/films.reducer';

import {AppComponent} from './app.component';

import {NavbarComponent} from './components/navbar/navbar.component';
import {FilmListComponent} from './components//film-list/film-list.component';
import {FilmListItemComponent} from './components//film-list-item/film-list-item.component';
import {FilmDetailComponent} from './components//film-detail/film-detail.component';
import {AboutComponent} from './components//about/about.component';
import {Material} from './material/material.module';
import {FilmService} from './services/film.service';
import {RatingComponent} from './components/rating/rating.component';
import {FilmsComponent} from './components/films/films.component';
import {FilmListItemTagComponent} from './components/film-list-item-tag/film-list-item-tag.component';
import {HttpClientModule} from '@angular/common/http';
import {HamburgerMenuComponent} from './components/hamburger-menu/hamburger-menu.component';
import {AddMovieComponent} from './components/add-movie/add-movie.component';
import {AppRoutingModule} from './routers/app-routing.module';
import {ThumbsUpComponent} from './components/thumbs-up/thumbs-up.component';
import {ThumbsDownComponent} from './components/thumbs-down/thumbs-down.component';
import {LoginComponent} from './components/login/login.component';
import {StorageService} from "./services/storage.service";
import { CanActivateComponent } from './components/can-activate/can-activate.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FilmListComponent,
		FilmListItemComponent,
		FilmDetailComponent,
		AboutComponent,
		RatingComponent,
		FilmsComponent,
		FilmListItemTagComponent,
		AddMovieComponent,
		HamburgerMenuComponent,
		ThumbsDownComponent,
		ThumbsUpComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		Material,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		StoreModule.forRoot({films: filmsReducer}),
		StoreDevtoolsModule.instrument()
	],
	providers: [FilmService, StorageService, CanActivateComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
}
