import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {MovieDetailsComponent} from '../movie-details/movie-details.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  allMovies;
  selectedMovie;

  constructor(private moviesService: MoviesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.allMovies = this.moviesService.getAll();
  }

  select = (movie) => {
    this.selectedMovie = movie;

    const dialogRef = this.dialog.open(MovieDetailsComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
