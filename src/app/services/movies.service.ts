import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MoviesService {
  // private file = '../../assets/movies.json';
  private url = 'http://gorgony.nl:1337/api';
  private popular = '../../assets/popular.json';

  constructor(private http: HttpClient) {
  }

  getAll = () => {
    return this.http.get(this.url + '/movie');
  }

  get = (id: Number) => {
    return this.http.get(this.url + '/movie/' + id);
  }

  getPopular = () => {
    return this.http.get(this.popular);
  }
}
