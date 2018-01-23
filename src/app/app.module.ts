import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FilmListComponent } from './components//film-list/film-list.component';
import { FilmListItemComponent } from './components//film-list-item/film-list-item.component';
import { FilmDetailComponent } from './components//film-detail/film-detail.component';
import { AboutComponent } from './components//about/about.component';
import { Material } from './material/material.module';

import { AppRoutingModule } from './routers/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FilmService } from './services/film.service';
import { RatingComponent } from './rating/rating.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmListItemTagComponent } from './components/film-list-item-tag/film-list-item-tag.component';

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
	FilmListItemTagComponent
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
export class AppModule { }
