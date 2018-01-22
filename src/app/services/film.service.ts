import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmService {
	private url = 'http://gorgony.nl:1337/api/movie';
	private films = null;

	constructor(private httpClient: HttpClient) { }

	getAll() {
		if (this.films == null) {
			let filmsObservable = this.httpClient.get(this.url);
			filmsObservable.subscribe(films => this.films = films);
			return filmsObservable;
		} else {
			return Observable.of(this.films);
		}
	}
	getById(id) {
		return new Observable(observer => {
			this.getAll().subscribe(films => {
				let film = films.filter(film => film.id == id)[0];
				observer.next(film);
				observer.complete();
			});
		});
	}

}
