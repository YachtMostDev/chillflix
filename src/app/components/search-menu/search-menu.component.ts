import { Component, OnInit, Input } from '@angular/core';
import { SEARCH_FILM } from "../../state/films.actions";
import { FilmService } from "../../services/film.service";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-search-menu',
	templateUrl: './search-menu.component.html',
	styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {

	constructor(private route: ActivatedRoute, private filmService: FilmService, private store: Store<any>) { }
	@Input() film;
	allFilms;

	ngOnInit() {
		this.filmService.getAll();
		this.store.select("films").subscribe(state => this.film = state.films.find(film => film.id === state.selectedFilm));
	}

	search(film) {
		this.store.dispatch({
		type: SEARCH_FILM,
		payload: film
		});
	}
}
