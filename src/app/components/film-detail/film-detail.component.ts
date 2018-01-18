import { FilmService } from './../../services/film.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  private film;
  
  constructor(private route: ActivatedRoute, private filmsService: FilmService) { }

  ngOnInit() {
    this.route.params.flatMap(params => {
      return this.filmsService.getById(params["id"]);
    }).subscribe(film => this.film = film);
  }

}
