import {Store} from '@ngrx/store';
import {FilmService} from './../../services/film.service';
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import {DESELECT_FILM, SELECT_FILM} from "../../state/films.actions";
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
  private film;

  constructor(private route: ActivatedRoute, private filmService: FilmService, private store: Store<any>) { }

  ngOnInit() {
		this.filmService.getAll();
		this.store.select("films").subscribe(state => this.film = state.films.find(film => film.id === state.selectedFilm));
  }

  close() {
		this.store.dispatch({
			type: DESELECT_FILM
		});
	}
}
