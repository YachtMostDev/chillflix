import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent {
  @Input() film;
  public player;

  constructor(private sanitizer: DomSanitizer, private filmService: FilmService) { }

  ngOnInit() {
    (<any>window).onYouTubeIframeAPIReady = () => {
      this.startFilm();
    };
  }

  ngAfterViewInit() {
    const doc = (<any>window).document;
    let playerApiScript = doc.createElement('script');
    playerApiScript.type = 'text/javascript';
    playerApiScript.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApiScript);
  }

  // save the progress of the video when the component is destroyed
  ngOnDestroy() {
    this.filmService.setProgression(this.film.id, `${this.player.getCurrentTime()}`)
  }

  youtubeURL = () => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.film.embed);
  }

  // add the film to the DOM with evens
  startFilm() {
    this.player = new (<any>window).YT.Player('ytPlayer', {
      videoId: (this.film.embed).substring(30),
      events: {
        'onReady': () => {
          this.player.seekTo(this.filmService.getProgression(this.film.id));
        },
        'onStateChange': () => {
          this.filmService.setProgression(this.film.id, `${this.player.getCurrentTime()}`);
        }
      }
    });
  }
}