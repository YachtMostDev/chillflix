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

	private classSelectedState = false;
	private classUnselectedState = false;

	private SELECTED = "selected";
	private UNSELECTED = "unselected";
 	constructor(private store: Store<any>, private filmService: FilmService) { }

	ngOnInit() {
		this.subscription = this.store.select('films')
			.map(state => state.selectedFilm)
			.subscribe(film => {
				this.selectedFilm = film;
			});
		this.store.select('films').pluck('queue').subscribe(value => {
			const arr = Object.values(value);
			const result = arr.indexOf(this.selectedFilm);
			if (result > -1) {
				this.state = this.SELECTED;
			} else {
				this.state = this.UNSELECTED;
			}
			this.setStyle();
		});
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	addMovieClick() {
		if (this.state === this.SELECTED) {
			// remove from watch queue
			this.state = this.UNSELECTED;
			this.removeFromQueue(this.selectedFilm);
		} else {
			// add to watch queue
			this.state = this.SELECTED;
			this.addToQueue(this.selectedFilm);
		}
		this.setStyle();
	}

	setStyle() {
		// if selected movie is in the queue. set the button state to selected and content to -
		// if selected movie is not in the queue. set the button state to unselected and content to +
		if (this.state === this.SELECTED) {
			this.content = '-';
			this.classSelectedState = true;
			this.classUnselectedState = false;
		} else {
			this.content = '+';
			this.classSelectedState = false;
			this.classUnselectedState = true;
		}
	}

	addToQueue(id) {
		this.store.dispatch({ type: ADD_TO_QUEUE, payload: { 'id': id } });
	}
	removeFromQueue(id) {
		this.store.dispatch({ type: REMOVE_FROM_QUEUE, payload: { 'id': id } });
	}
}
