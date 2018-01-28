import { Store } from '@ngrx/store';
import { ADD_TO_QUEUE } from '../../state/films.actions';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
	selector: 'app-add-movie',
	templateUrl: './add-movie.component.html',
	styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit, OnDestroy {

	private selectedFilm;
	private subscription;
 	constructor(private store: Store<any>) { }

	ngOnInit() {
		this.subscription = this.store.select('films')
			.map(state => state.selectedFilm)
			.subscribe(film => {
				this.selectedFilm = film;
			});
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	addMovieClick() {
		// check if statemanager has selected film.
		// if true: call state manager to add that film to the to-watch queue
		if (this.selectedFilm != null) {
			console.log('adding' + this.selectedFilm.id + ' to the queue');
			this.store.dispatch({ type: ADD_TO_QUEUE, payload: {'id': this.selectedFilm.id } });
		} else {
			console.log('selected film = null, can\'t add to queue');
		}
	}
}
