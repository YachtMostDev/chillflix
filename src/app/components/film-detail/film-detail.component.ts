import { Store } from '@ngrx/store';
import { FilmService } from './../../services/film.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';

@Component({
	selector: 'app-film-detail',
	templateUrl: './film-detail.component.html',
	styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  private film;

  constructor(private route: ActivatedRoute, private filmService: FilmService, private store: Store<any>) { }

  ngOnInit() {
  	this.filmService.getAll();
	this.route.params.flatMap(params => {
	  return this.store.select('films').pluck('films').find((film: any) => film.id === parseInt(params['id'], 10));
	}).subscribe(film => this.film = film);
  }
}
