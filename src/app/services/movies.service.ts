import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MoviesService {
  private file = '../../assets/movies.json';
  private popular = '../../assets/popular.json';

  constructor(private http: HttpClient) {
  }

  getAll = () => {
    return this.http.get(this.file);
  }

  getPopular = () => {
    return this.http.get(this.popular);
  }
}
