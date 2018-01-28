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

import { ThumbsComponent } from './thumbs/thumbs.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
>>>>>>> develop

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
>>>>>>> develop
})
export class AppModule {
}
