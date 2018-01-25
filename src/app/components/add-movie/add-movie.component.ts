import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  addMovieClick() {
	  // check if statemanager has selected film.
	  // if true: call state manager to add that film to the to-watch queue
	  console.log('clicked add movie');
  }
}
