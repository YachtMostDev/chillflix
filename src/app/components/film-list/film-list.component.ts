import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  allFilms;
  constructor(private filmService: FilmService, private store: Store<any>) {
  }

  ngOnInit() {
  	this.filmService.getAll();
	this.allFilms = this.store.select("films").pluck("films");
  }

}
