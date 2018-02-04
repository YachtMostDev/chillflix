import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FilmService} from '../../services/film.service';

@Component({
	selector: 'app-thumbs-down',
	templateUrl: './thumbs-down.component.html',
	styleUrls: ['./thumbs-down.component.css']
})
export class ThumbsDownComponent {
	@Input() film;

	constructor(private filmService: FilmService) {
	}

	thumbsDownClick() {
		this.filmService.setRating(this.film, -1);
	}
}
