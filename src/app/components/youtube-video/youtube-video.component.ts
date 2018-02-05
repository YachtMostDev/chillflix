import {Component, Input, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent {
  @Input() url;

  constructor(private sanitizer: DomSanitizer) { }

  youtubeURL = () => {
	return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
