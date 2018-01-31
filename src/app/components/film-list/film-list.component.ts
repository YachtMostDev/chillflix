import {
	Component,
	ElementRef,
	Input,
	OnInit, QueryList,
	ViewChild, ViewChildren,
	HostListener,
	Renderer2
} from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/pluck';
import { SELECT_FILM } from "../../state/films.actions";

@Component({
	selector: 'app-film-list',
	templateUrl: './film-list.component.html',
	styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
	@Input() title;

	@ViewChild('carousel') carousel: ElementRef;
	@ViewChild('carouselList') carouselList: ElementRef;
	@ViewChildren('item', { read: ElementRef }) items: QueryList<ElementRef>;

	previousVisible = false;
	nextVisible = true;
	currentPage = 0;
	length: number;
	itemWidth: number;
	buttonWidth = 60;
	carouselWidth: number;
	itemsPerPage: number;
	nrOfPages: number;
	negativeMargin = 0;
	carouselOffset = 0;

	firstChild : ElementRef;
	lastChild : ElementRef;

	allFilms;
	filmService;

	constructor(filmService: FilmService, private store: Store<any>, private renderer: Renderer2) {
		this.filmService = filmService;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.calculateNewPosition();
	}

	ngOnInit() {
		this.filmService.getAll();
		this.allFilms = this.store.select("films").pluck("films").subscribe((value) => {
			this.allFilms = value;
		});
	}

	ngAfterViewInit() {
		// get first child on the page
		this.firstChild  = this.carouselList.nativeElement.children[((this.currentPage + 1) * this.itemsPerPage) - this.itemsPerPage];

		// get last child on the page
		this.lastChild  = this.carouselList.nativeElement.children[((this.currentPage + 1) * this.itemsPerPage) - 1];
		
		this.calculateNewPosition()
	}

	previousClick(): void {
		//maybe fixed by ngAfterViewInit?
		//this.calculateNewPosition(); // TODO: Get rid of this ugly as hell fix
		if (this.currentPage > 0) {
			this.currentPage--;
			this.calculateNewPosition();
		}
		console.log('Going to previous page: ' + this.currentPage);
	}

	nextClick(): void {
		//maybe fixed by ngAfterViewInit?
		//this.calculateNewPosition(); // TODO: Get rid of this ugly as hell fix
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

	// A lot of operations in this method only have to happen if the itemsPerPage amount changes
	// It also can be a lot more efficient, like a lot
	calculateNewPosition() {
		this.length = this.allFilms.length;
		this.itemWidth = 184;
		this.buttonWidth = (document.body.clientWidth % this.itemWidth) / 2;
		this.carouselWidth = (document.body.clientWidth - this.buttonWidth * 2);
		this.itemsPerPage = Math.floor(this.carouselWidth / this.itemWidth);

		//Change the amount of items on a page so buttons don't become to small
		if (this.buttonWidth < 30) {
			this.buttonWidth = this.buttonWidth + this.itemWidth / 2;
			this.itemsPerPage = this.itemsPerPage - 1;
		};

		this.nrOfPages = Math.ceil(this.length / this.itemsPerPage);
		if (this.firstChild)
			this.renderer.removeClass(this.firstChild, "first-child");
		
		if (this.lastChild)
			this.renderer.removeClass(this.lastChild, "last-child");

		// get first child on the page
		this.firstChild  = this.carouselList.nativeElement.children[((this.currentPage + 1) * this.itemsPerPage) - this.itemsPerPage];

		// get last child on the page
		this.lastChild  = this.carouselList.nativeElement.children[((this.currentPage + 1) * this.itemsPerPage) - 1];
		if (this.firstChild)
			this.renderer.addClass(this.firstChild, "first-child");
		
		console.log(this.firstChild);

		if (this.lastChild)
			this.renderer.addClass(this.lastChild, "last-child");
		
		console.log(this.lastChild);
		

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
