import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilmListComponent } from './components//film-list/film-list.component';
import { FilmListItemComponent } from './components//film-list-item/film-list-item.component';
import { FilmDetailComponent } from './components//film-detail/film-detail.component';
import { AboutComponent } from './components//about/about.component';
import { Material } from './material/material.module';
import { HttpClientModule } from '@angular/common/http/src/module';

import { AppRoutingModule } from './routers/app-routing.module';
@NgModule({
  declarations: [
	  AppComponent,
	  NavbarComponent,
	  FilmListComponent,
  	FilmListItemComponent,
  	FilmDetailComponent,
  	AboutComponent,
  	AppRoutingModule
  ],
  imports: [
	  BrowserModule,
  	HttpClientModule,
  	Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
