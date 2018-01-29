import {
	Component,
	ElementRef,
	Input,
	OnInit, QueryList,
	ViewChild, ViewChildren
} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/pluck';
import {SELECT_FILM} from "../../state/films.actions";

@Component({
	selector: 'app-film-list',
	templateUrl: './film-list.component.html',
	styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
	@Input() title;

	@ViewChild('carousel') carousel: ElementRef;
	@ViewChildren('item', {read: ElementRef}) items: QueryList<ElementRef>;

	previousVisible = false;
	nextVisible = true;
	currentPage = 0;
	length: number;
	itemWidth: number;
	carouselWidth: number;
	itemsPerPage: number;
	nrOfPages: number;
	negativeMargin = 0;

	allFilms;
	filmService;

	constructor(filmService: FilmService, private store: Store<any>) {
		this.filmService = filmService;
	}

	ngOnInit() {
		this.filmService.getAll();
		this.allFilms = this.store.select("films").pluck("films").subscribe((value) => {
			this.allFilms = value;
		});
	}

	previousClick(): void {
		this.calculateNewPosition(); // TODO: Get rid of this ugly as hell fix
		if (this.currentPage > 0) {
			this.currentPage--;
			this.calculateNewPosition();
		}
		console.log('Going to previous page: ' + this.currentPage);
	}

	nextClick(): void {
		this.calculateNewPosition(); // TODO: Get rid of this ugly as hell fix
		if (this.currentPage < this.nrOfPages) {
			this.currentPage++;
			this.calculateNewPosition();
		}
		console.log('Going to next page: ' + this.currentPage);
	}

	calcPreviousVisible(): void {
		this.previousVisible = this.currentPage > 0;
	}

	calcNextVisible(): void {
		this.nextVisible = this.currentPage < this.nrOfPages - 1;
	}

	calculateNewPosition() {
		this.length = this.allFilms.length;
		this.itemWidth = 184;
		// this.itemWidth = this.items[0].nativeElement.offsetWidth;
		this.carouselWidth = this.carousel.nativeElement.offsetWidth;
		this.itemsPerPage = Math.floor(this.carouselWidth / this.itemWidth);
		this.nrOfPages = Math.ceil(this.length / this.itemsPerPage);

		this.negativeMargin = this.itemWidth * this.itemsPerPage * this.currentPage;
		this.calcNextVisible();
		this.calcPreviousVisible();
	}

	select(film) {
		this.store.dispatch({
			type: SELECT_FILM,
			payload: film
		});
	}
}
