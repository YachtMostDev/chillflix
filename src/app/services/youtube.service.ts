import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film';

@Injectable()
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getYoutubeResults(search: String) : Film[] {
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
          films.push(film);
        });
      });
      return films;
    }
}