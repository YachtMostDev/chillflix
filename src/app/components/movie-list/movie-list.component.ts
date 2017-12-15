import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {MovieDetailDialogComponent} from '../movie-details/movie-details.component';
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
    this.openDialog();
  }

  openDialog = () => {
    const dialogRef = this.dialog.open(MovieDetailDialogComponent, {
      data: { movie: this.selectedMovie }
    });
    dialogRef.afterClosed()
      .subscribe(
        result => {
          console.log('Something something');
        }
      );
  }
}
