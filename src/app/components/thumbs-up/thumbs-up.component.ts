import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilmService } from '../../services/film.service';

@Component({
	selector: 'app-thumbs-up',
	templateUrl: './thumbs-up.component.html',
	styleUrls: ['./thumbs-up.component.css']
})
export class ThumbsUpComponent {

	@Input() film;

	setStyle = {
		'color': 'grey',
		'background-color': 'transparent',
		'border': 'none'
	};

	constructor(private filmService: FilmService) { }

	thumbsUpClick() {
		this.filmService.setRating(this.film, 1);
		this.updateStyle();
	}

	updateStyle() {
		this.setStyle.color = this.setStyle.color === 'grey' ? 'green' : 'grey';
	}
	resetStyle() {
		this.setStyle.color = 'grey';
	}
}
