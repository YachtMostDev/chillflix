import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilmService } from '../../services/film.service';

@Component({
	selector: 'app-thumbs-down',
	templateUrl: './thumbs-down.component.html',
	styleUrls: ['./thumbs-down.component.css']
})
export class ThumbsDownComponent {

	@Input() film;

	setStyle = {
		'color': 'grey',
		'background-color': 'transparent',
		'border': 'none'
	};

	constructor(private filmService: FilmService) {
	}

	thumbsDownClick() {
		this.filmService.setRating(this.film, -1);
		this.updateStyle();
	}
	updateStyle() {
		this.setStyle.color = this.setStyle.color === 'grey' ? 'red' : 'grey';
	}
	resetStyle() {
		this.setStyle.color = 'grey';
	}
}
