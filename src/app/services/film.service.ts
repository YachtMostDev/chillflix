import {Store} from '@ngrx/store';
import {LOAD_FILMS, RATING_RESET, RATING_PLUS, RATING_MINUS, SET_VIEW} from '../state/films.actions';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmService {
	private url = 'http://gorgony.nl:1337/api/movie';

	constructor(private http: HttpClient, private store: Store<any>) {
	}

	getAll() {
		this.http.get(this.url)
			.subscribe(films => {
				this.store.dispatch({
					type: LOAD_FILMS,
					payload: films
				});
			});
	}

	setRating(film, rating) {
		const ratingObject = {upvote: 0, downvote: 0};
		let action = RATING_RESET;
		if (film.rating === rating) {
			ratingObject[rating === 1 ? 'upvote' : 'downvote'] = -1;
		} else if (rating === 1) {
			action = RATING_PLUS;
			ratingObject.upvote = 1;
			if (film.rating === -1) {
				ratingObject.downvote = -1;
			}
		} else if (rating === -1) {
			action = RATING_MINUS;
			ratingObject.downvote = 1;
			if (film.rating === 1) {
				ratingObject.upvote = -1;
			}
		}
<<<<<<< HEAD
		this.http.post(this.url + `\\${film.id}\\vote`, ratingObject)
=======
		const postUrl = this.url + `/${film.id}/vote`;
		this.http.post(postUrl, ratingObject)
>>>>>>> develop
			.subscribe((movie: any) => {
				this.store.dispatch({
					type: action,
					payload: {id: film.id}
				});
			});
	}
<<<<<<< HEAD
	addView(id) {
		this.http.post(this.url + `\\${id}\\watch`, {})
=======

	addView(film) {
		this.http.post(this.url + `\\${film.id}\\watch`, {})
>>>>>>> develop
			.subscribe((filmResult: any) => {
				this.store.dispatch({
					type: SET_VIEW,
					payload: {id: filmResult.id, viewCount: filmResult.watched}
				});
			});
	}
}
