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


import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { ThumbsDownComponent } from './components/thumbs-down/thumbs-down.component';
import { ThumbsUpComponent } from './components/thumbs-up/thumbs-up.component';
import { HttpClientModule } from '@angular/common/http';
import { RatingComponent } from './rating/rating.component';
import { AppRoutingModule } from './routers/app-routing.module';
import { FilmService } from './services/film.service';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FilmListComponent,
		FilmListItemComponent,
		FilmDetailComponent,
		AboutComponent,
		RatingComponent,
		ThumbsDownComponent,
		ThumbsUpComponent,
		HamburgerMenuComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		Material,
		AppRoutingModule,
		StoreModule.forRoot({ films: filmsReducer }),
		StoreDevtoolsModule.instrument()
	],
	providers: [FilmService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
