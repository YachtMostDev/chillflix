import { REMOVE_FROM_QUEUE } from './../../state/films.actions';
import { Store } from '@ngrx/store';
import { ADD_TO_QUEUE } from '../../state/films.actions';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { FilmService } from '../../services/film.service';

@Component({
	selector: 'app-add-movie',
	templateUrl: './add-movie.component.html',
	styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit, OnDestroy {

	private selectedFilm;
	private subscription;
	private filmsInQueue;
	private content;
	private state;

	private SELECTED = "selected";
	private UNSELECTED = "unselected";
 	constructor(private store: Store<any>, private filmService: FilmService) { }

	ngOnInit() {
		this.subscription = this.store.select('films')
			.map(state => state.selectedFilm)
			.subscribe(film => {
				this.selectedFilm = film;
			});

		// doesn't work?
		// const isInQueue = this.store.select("films").subscribe(
		// 	state => this.filmsInQueue = state.films.filter(
		// 		film => state.queue.indexOf(film.id) !== -1
		// 	)
		// );

		const isInQueue = false;
		if (isInQueue) {
			this.content = "-";
			this.state = this.SELECTED;
		} else {
			this.content = "+";
			this.state = this.UNSELECTED;
		}
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	addMovieClick() {
		console.log('selected film: ' + JSON.stringify(this.selectedFilm));
		console.log('state: ' + this.SELECTED);

		if (this.state === this.SELECTED) {
			// remove from watch queue
			this.state = this.UNSELECTED;
			this.removeFromQueue(this.selectedFilm);
		} else {
			// add to watch queue
			this.state = this.UNSELECTED;
			this.addToQueue(this.selectedFilm);
		}
		// if (this.selectedFilm != null) {
		// 	console.log('adding ' + this.selectedFilm + ' to the queue');
		// 	this.store.dispatch({ type: ADD_TO_QUEUE, payload: {'id': this.selectedFilm.id } });
		// 	this.state = this.SELECTED;
		// } else {
		// 	console.log('selected film = null, can\'t add to queue');
		// }
	}
	addToQueue(id) {
		this.store.dispatch({ type: ADD_TO_QUEUE, payload: { 'id': id } });
	}
	removeFromQueue(id) {
		this.store.dispatch({ type: REMOVE_FROM_QUEUE, payload: { 'id': id } });
	}
}
