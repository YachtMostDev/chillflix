import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film';
import {Store} from '@ngrx/store';
import {LOAD_FILMS, ADD_FILMS} from '../state/films.actions';

@Injectable()
export class YoutubeService {
  private id : number = 10;

  constructor(private http: HttpClient, private store: Store<any>) { }

  getYoutubeResults(search: String) {
    search.replace(' ', '+');
    let youtubeUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + search + '&type=video&key=AIzaSyDolBNo5dtQlHTa80U4vwFjGMUKbZkdf94';
    let films : Array<Film> = new Array;

    this.http.get(youtubeUrl)
      .subscribe((videos : any) => {
        // console.log(videos);
        videos.items.forEach(youtubeFilm => {
          let film : Film = new Film(youtubeFilm.id.videoId);
          film.thumbnail = youtubeFilm.snippet.thumbnails.high.url;
          film.title = youtubeFilm.snippet.title;
          film.description = youtubeFilm.snippet.description;
          film.id = this.id++;
          films.push(film);
        });
        console.log(films);
        this.store.dispatch({
          type: ADD_FILMS,
          payload: films
        });
      });
      
    }
}