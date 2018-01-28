import {Store} from '@ngrx/store';
import {FilmService} from './../../services/film.service';
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';
import {DESELECT_FILM} from "../../state/films.actions";


@Component({
	selector: 'app-film-detail',
	templateUrl: './film-detail.component.html',
	styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  private film;
  color: string;

	constructor(private route: ActivatedRoute, private filmService: FilmService, private store: Store<any>) {
	}

	ngOnInit() {
		this.filmService.getAll();
		this.store.select("films").subscribe(state => this.film = state.films.find(film => film.id === state.selectedFilm));
  }
  
  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

	deselect() {
		this.store.dispatch({
			type: DESELECT_FILM
		});
	}
}
