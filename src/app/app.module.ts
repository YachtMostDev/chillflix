import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import {MoviesService} from './services/movies.service';
import {HttpClientModule} from '@angular/common/http';
import { MovieDetailDialogComponent } from './components/movie-details/movie-details.component';

import { MaterialModule } from './modules/material/material.module';
import { YoutubeVideoComponent } from './components/youtube-video/youtube-video.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListItemComponent,
    MovieListComponent,
    MovieDetailDialogComponent,
    YoutubeVideoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
