import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {FilmService } from '../../services/film.service';


@Component({
  selector: 'app-thumbs-down',
  templateUrl: './thumbs-down.component.html',
  styleUrls: ['./thumbs-down.component.css']
})
export class ThumbsDownComponent implements OnInit {

  private selectedFilm;
	private subscription;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }

  thumbsDownClick() {
    this.filmService.setRating (this.selectedFilm, -1);
  }
}
