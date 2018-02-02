import {
	Component,
	ElementRef,
	Input,
	OnInit, QueryList,
	ViewChild, ViewChildren,
	AfterViewInit,
	HostListener,
	Renderer2
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

	@ViewChild(FilmDetailComponent) filmDetail : FilmDetailComponent;
	// set detail(directive: FilmDetailComponent) {
	//   this.film = directive.film;
	// };

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
		
		console.log(this.filmDetail);
		console.log(this.carousel);

		this.filmService.getAll();
		this.allFilms = this.store.select("films").pluck("films").subscribe((value) => {
			this.allFilms = value;
		});
	}

	log(e) {
		console.log(e);
	}

	ngAfterViewInit() {
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

		// remove firstChild and lastChild when switching pages
		if (this.firstChild)
			this.renderer.removeClass(this.firstChild, "first-child");

		if (this.lastChild)
			this.renderer.removeClass(this.lastChild, "last-child");

		// get first child on the page
		this.firstChild = this.carouselList.nativeElement.children[((this.currentPage + 1) * this.itemsPerPage) - this.itemsPerPage];

		// get last child on the page
		this.lastChild = this.carouselList.nativeElement.children[((this.currentPage + 1) * this.itemsPerPage) - 1];

		if (this.firstChild) {
			this.renderer.addClass(this.firstChild, "first-child");

			// add and remove class to the carousel-list if the mouse enters or leaves the first-child
			// pushes the list tot the right by 0px
			let firstChildMouseEnter = this.renderer.listen(this.firstChild, 'mouseenter', () => {
				this.renderer.addClass(this.carouselList.nativeElement, "first-child-hover");
			})
			let firstChildMouseLeave = this.renderer.listen(this.firstChild, 'mouseleave', () => {
				this.renderer.removeClass(this.carouselList.nativeElement, "first-child-hover");
			})
		};

		if (this.lastChild){
			this.renderer.addClass(this.lastChild, "last-child");

			// add and remove class to the carousel-list if the mouse enters or leaves the last-child
			// pushes the list tot the right by 180px
			let lastChildMouseEnter = this.renderer.listen(this.lastChild, 'mouseenter', () => {
				this.renderer.addClass(this.carouselList.nativeElement, "last-child-hover");
			})
			let lastChildMouseLeave = this.renderer.listen(this.lastChild, 'mouseleave', () => {
				this.renderer.removeClass(this.carouselList.nativeElement, "last-child-hover");
			})
		}

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