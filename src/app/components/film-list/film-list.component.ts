import {
	Component,
	ElementRef,
	Input,
	OnInit, QueryList,
	ViewChild, ViewChildren,
	AfterViewInit,
	HostListener,
	Renderer
} from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/pluck';	
import { SELECT_FILM } from "../../state/films.actions";
import { FilmDetailComponent } from '../film-detail/film-detail.component';

@Component({
	selector: 'app-film-list',
	templateUrl: './film-list.component.html',
	styleUrls: ['./film-list.component.css']
})

export class FilmListComponent implements OnInit, AfterViewInit {
	@Input() title;

	@ViewChild('carousel') carousel: ElementRef;
	@ViewChild('carouselList') carouselList: ElementRef;
	@ViewChildren('item', { read: ElementRef }) items: QueryList<ElementRef>;

	opened = false;
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

	firstChild: ElementRef;
	lastChild: ElementRef;

	firstMouseEnter;
	lastMouseEnter;
	firstMouseLeave;
	lastMouseLeave;

	allFilms;
	filmService;

	constructor(filmService: FilmService, private store: Store<any>, private renderer: Renderer) {
		this.filmService = filmService;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.calculateNewPosition();
	}

	ngOnInit() {
		this.store.select('films').pluck('selectedFilm').subscribe(value => {
			if(!value) this.opened = false;
		})

		this.filmService.getAll();
		this.store.select("films").pluck("films").subscribe((value) => {
			this.allFilms = value;
		});
	}

	ngAfterViewInit() {
		this.calculateNewPosition();
	}

	previousClick(): void {
		//maybe fixed by ngAfterViewInit?
		//this.calculateNewPosition(); // TODO: Get rid of this ugly as hell fix
		if (this.currentPage > 0) {
			this.currentPage--;
			this.calculateNewPosition();
			this.changeList();
		}
		console.log('Going to previous page: ' + this.currentPage);
	}

	nextClick(): void {
		//maybe fixed by ngAfterViewInit?
		//this.calculateNewPosition(); // TODO: Get rid of this ugly as hell fix
		if (this.currentPage < this.nrOfPages - 1) {
			this.currentPage++;
			this.calculateNewPosition();
			this.changeList();
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
		this.buttonWidth = (document.body.clientWidth % this.itemWidth) / 2;

		let itemCheck = this.itemsPerPage;

		// change the amount of items on a page so buttons don't become too small
		if (this.buttonWidth < 30)
			this.buttonWidth = this.buttonWidth + this.itemWidth / 2;

		this.carouselWidth = (document.body.clientWidth - this.buttonWidth * 2);
		this.itemsPerPage = Math.floor(this.carouselWidth / this.itemWidth);
		this.nrOfPages = Math.ceil(this.length / this.itemsPerPage);

		// check if the amount of items in the list has changed
		if (itemCheck !== this.itemsPerPage)
			this.changeList();

		this.negativeMargin = this.itemWidth * this.itemsPerPage * this.currentPage;
		this.calcNextVisible();
		this.calcPreviousVisible();
	}

	// change the first and last items on the list place
	changeList() {
		this.removeClass(this.firstChild, "first-child");
		this.removeClass(this.lastChild, "last-child");

		// get first child on the page
		this.firstChild = this.carouselList.nativeElement.children[((this.currentPage + 1) * this.itemsPerPage) - this.itemsPerPage];

		// get last child on the page
		this.lastChild = this.carouselList.nativeElement.children[((this.currentPage + 1) * this.itemsPerPage) - 1];

		this.changeListItem();
	}

	// reset the events on the list-items
	changeListItem() {
		if (this.firstChild) {
			this.renderer.addClass(this.firstChild, "first-child");

			// delete eventlistener if it exists
			if (this.firstMouseEnter)
				this.firstMouseEnter();

			if (this.firstMouseLeave)
				this.firstMouseLeave();

			//add eventlisteners to the first-child element
			this.firstMouseEnter = this.renderer.listen(this.firstChild, 'mouseenter', () => {
				this.renderer.addClass(this.carouselList.nativeElement, "first-child-hover");
			});
			this.firstMouseLeave = this.renderer.listen(this.firstChild, 'mouseleave', () => {
				this.renderer.removeClass(this.carouselList.nativeElement, "first-child-hover");
			});
		}
		if (this.lastChild) {
			this.renderer.addClass(this.lastChild, "last-child");

			if (this.lastMouseEnter)
				this.lastMouseEnter();

			if (this.lastMouseLeave)
				this.lastMouseLeave();

			//add eventlisteners to the last-child element
			this.lastMouseEnter = this.renderer.listen(this.lastChild, 'mouseenter', () => {
				this.renderer.addClass(this.carouselList.nativeElement, "last-child-hover");
			});
			this.lastMouseLeave = this.renderer.listen(this.lastChild, 'mouseleave', () => {
				this.renderer.removeClass(this.carouselList.nativeElement, "last-child-hover");
			});
		}
	}

	// delete a class from a DOM element
	removeClass(listItem: ElementRef, itemName: string) {
		if (listItem)
			this.renderer.removeClass(listItem, itemName);
	}

	select(film) {
		this.opened = true;
		this.store.dispatch({
			type: SELECT_FILM,
			payload: film
		});
	}
}