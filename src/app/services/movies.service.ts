import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {
  private file = '../../assets/movies.json';
  private movies;

  constructor(private http: HttpClient) {
    this.movies = this.http.get(this.file);
  }

  getAll = () => {
    return this.http.get(this.file);
  }
}
