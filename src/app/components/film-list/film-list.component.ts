import {
	AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild,
	ViewChildren
} from '@angular/core';
import { FilmService } from '../../services/film.service';
import {FilmListItemComponent} from "../film-list-item/film-list-item.component";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  @Input() title;

  @ViewChild('carousel') carousel: ElementRef;
  @ViewChild('carouselContent') carouselContent: ElementRef;
  @ViewChild('carouselList') carouselList: ElementRef;
  @ViewChildren('carouselListItem') carouselListItems: QueryList<ElementRef>;
  @ViewChild('carouselPrevious') carouselPrevious: ElementRef;
  @ViewChild('carouselNext') carouselNext: ElementRef;

  previousVisible = false;
  nextVisible = true;
  currentPage = 0;
  length: number;
  itemWidth: number;
  carouselWidth: number;
  itemsPerPage: number;
  nrOfPages: number;
  negativeMargin: number;

  allFilms;
  filmService;
  constructor(filmService: FilmService) {
	this.filmService = filmService;
  }

  ngOnInit() {
  	this.filmService.getAll().subscribe(result => {
  		this.allFilms = result;
		this.length = this.allFilms.length;
		this.itemWidth = 190; // TODO: Don't hard code this
	});
  }

  previousClick() {
  	this.currentPage--;
  	this.calculateNewPosition();
  }

  nextClick() {
	this.currentPage++;
	this.calculateNewPosition();
  }

  calculateNewPosition() {
	  this.carouselWidth = this.carousel.nativeElement.offsetWidth;
	  this.itemsPerPage = Math.floor(this.carouselWidth / this.itemWidth);
	  this.nrOfPages = Math.ceil(this.length / this.itemsPerPage);

  	  if (this.currentPage <= 0) {
  	  	this.currentPage = 0;
  	  	this.previousVisible = false;
	  } else {
  	  	this.previousVisible = true;
	  }
	  if (this.currentPage >= this.nrOfPages - 1) {
		this.currentPage = this.nrOfPages - 1;
		this.nextVisible = false;
	  } else {
  	  	this.nextVisible = true;
	  }
	  console.log('Current page: ' + this.currentPage);

	  this.negativeMargin = this.itemWidth * this.itemsPerPage * this.currentPage;
  }
}
