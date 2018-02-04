import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {FilmService } from '../../services/film.service';

@Component({
  selector: 'app-thumbs-up',
  templateUrl: './thumbs-up.component.html',
  styleUrls: ['./thumbs-up.component.css']
})
export class ThumbsUpComponent implements OnInit {

  private selectedFilm;
	private subscription;

  constructor(private filmService: FilmService) { }

  ngOnInit() {

  }
  thumbsUpClick() {
    this.filmService.setRating (this.selectedFilm, 1);
  }
}
