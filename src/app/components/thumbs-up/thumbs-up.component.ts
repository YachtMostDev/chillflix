import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FilmService} from '../../services/film.service';

@Component({
	selector: 'app-thumbs-up',
	templateUrl: './thumbs-up.component.html',
	styleUrls: ['./thumbs-up.component.css']
})
export class ThumbsUpComponent {
	@Input() film;

	constructor(private filmService: FilmService) {}

	thumbsUpClick() {
		this.filmService.setRating(this.film, 1);
	}
}
