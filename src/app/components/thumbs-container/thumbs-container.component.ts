import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { ThumbsUpComponent } from '../thumbs-up/thumbs-up.component';
import { ThumbsDownComponent } from '../thumbs-down/thumbs-down.component';
import { ViewChildren } from '@angular/core/src/metadata/di';


@Component({
  selector: 'app-thumbs-container',
  templateUrl: './thumbs-container.component.html',
  styleUrls: ['./thumbs-container.component.css']
})
export class ThumbsContainerComponent implements OnInit {
// With using @ViewChild this way, you are able to use the methods described in the children components
  @ViewChild(ThumbsUpComponent) private thumbsUpComponent: ThumbsUpComponent;
  @ViewChild(ThumbsDownComponent) private thumbsDownComponent: ThumbsDownComponent;

  @Input() film;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }
// This will reset the thumbsDownComponent to grey, before using the thumbsUpClick in the thumbsUpComponent. 
// This way when pressing buttons you will never be able to color them both
  thumbsUpChild() {
    this.thumbsDownComponent.resetStyle();
    this.thumbsUpComponent.thumbsUpClick();
  }

  thumbsDownChild() {
    this.thumbsUpComponent.resetStyle();
    this.thumbsDownComponent.thumbsDownClick();
  }

}
