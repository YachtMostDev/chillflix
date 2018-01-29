import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() id;

  constructor() { }

  roundHalf(num) {
    return Math.round(num * 2) / 2;
  }
  ngOnInit() {
    let idTruncate = this.roundHalf(this.id);
    console.log(idTruncate);
    this.id = idTruncate;
  }


}
