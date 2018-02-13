import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film';
import {Store} from '@ngrx/store';
import {LOAD_FILMS, ADD_FILMS} from '../state/films.actions';

@Injectable()
export class YoutubeService {
  private apiKey : string = 'AIzaSyDolBNo5dtQlHTa80U4vwFjGMUKbZkdf94';

  constructor(private http: HttpClient, private store: Store<any>) { }

  // get results from youtube using an apiKey
  getYoutubeResults(search: String) : Array<Film> {
    // glue searchquery together
    search.replace(' ', '+');
    let youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + search + '&type=video&key=' + this.apiKey;
    let films : Array<Film> = new Array;

    this.http.get(youtubeUrl)
      .subscribe((videos : any) => {
        videos.items.forEach(youtubeFilm => {
          // pour data from the apiCall into an object that can be used by the program
          let film : Film = new Film(youtubeFilm.id.videoId);
          film.thumbnail = youtubeFilm.snippet.thumbnails.high.url;
          film.title = youtubeFilm.snippet.title;
          film.description = youtubeFilm.snippet.description;
          films.push(film);
        });
      });
      return films;
    }
}