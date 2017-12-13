import {Component, Input, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {
  @Input() code;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  youtubeURL = () => {
    const url = 'https://www.youtube.com/embed/' + this.code;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
