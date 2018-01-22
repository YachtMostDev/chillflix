import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-film-list-item',
  templateUrl: './film-list-item.component.html',
  styleUrls: ['./film-list-item.component.css']
})
export class FilmListItemComponent implements OnInit {

  constructor() { }
  
  @Input() film;

  private updatedFilm;

  ngOnInit() {
    let maxLength = 200;
    let updateFilm = this.film;
    let length = this.film.description.length;
    updateFilm["fulldescription"] = this.film.description;
    
    if (length > maxLength) {
      
      updateFilm.description = this.film.description.substring(0,maxLength) + '...';
    }
    
    this.updatedFilm = updateFilm
  
    console.log(this.film);
    console.log(this.updatedFilm);
  }

}
