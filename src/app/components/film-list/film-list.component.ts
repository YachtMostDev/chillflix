import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  allFilms;
  filmService;
  constructor(filmService: FilmService) {
    this.filmService = filmService;
   }

  ngOnInit() {
    this.allFilms = this.filmService.getAll();
  }

}
