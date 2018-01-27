import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbs',
  templateUrl: './thumbs.component.html',
  styleUrls: ['./thumbs.component.css']
})
export class ThumbsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  vote = 0

  function upVote() {
    vote = 1
    class = upVote
    
  }
  function downVote(){
    vote = -1
    class = downVote
  }

  https://jsfiddle.net/coligo/g7mu5ndz/
}
