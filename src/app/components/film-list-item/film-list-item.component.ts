import { Store } from '@ngrx/store';
import {Component, OnInit, Input} from '@angular/core';
import {SELECT_FILM} from "../../state/films.actions";

@Component({
  selector: 'app-film-list-item',
  templateUrl: './film-list-item.component.html',
  styleUrls: ['./film-list-item.component.scss']
})
export class FilmListItemComponent implements OnInit {

	constructor(private store: Store<any>) {
	}

	@Input() film;

	private updatedFilm;

	ngOnInit() {
		const maxLength = 200;
		const updateFilm = this.film;
		const length = this.film.description.length;
		updateFilm["fulldescription"] = this.film.description;

		if (length > maxLength) {

			updateFilm.description = this.film.description.substring(0, maxLength) + '...';
		}

		this.updatedFilm = updateFilm;
	}
}
