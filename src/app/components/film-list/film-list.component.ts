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
  @ViewChildren('carouselListItem') carouselListItems: QueryList<FilmListItemComponent>;
  @ViewChild('carouselPrevious') carouselPrevious: ElementRef;
  @ViewChild('carouselNext') carouselNext: ElementRef;

  allFilms;
  filmService;
  constructor(filmService: FilmService) {
	this.filmService = filmService;
  }

  ngOnInit() {
  	this.allFilms = this.filmService.getAll();
  }

  private setWidth(): void {
	this.carouselList.nativeElement.removeAttribute('style');
	const currentWidth = this.carouselListItems[0].nativeElement.outerWidth() * this.carouselListItems.length;
	this.carouselList.nativeElement.style.width = currentWidth;
  }

  private slide(): void {
	// stuff
  }
}
