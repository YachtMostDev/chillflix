import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent {
  @Input() url : string;
  public player;

  constructor(private sanitizer: DomSanitizer) { }

  youtubeURL = () => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngAfterViewInit() {
    const doc = (<any>window).document;
    let playerApiScript = doc.createElement('script');
    playerApiScript.type = 'text/javascript';
    playerApiScript.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApiScript);
  }

  ngOnInit() {
    (<any>window).onYouTubeIframeAPIReady = () => {
      this.playVideo();
    };
  }

  ngOnDestroy() {
    console.log(this.player.getCurrentTime());
  }

  playVideo(){
    console.log("exodus");
      this.player = new (<any>window).YT.Player('ytPlayer', {
        videoId: (this.url).substring(30),
        events: {
          'onReady': () => {
            // go to a specific point in the video, paramter is in seconds
            if (true){
            }
            else {
              this.player.seekTo(42);
            }
            console.log("ready");
          },
          'onStateChange': () => {
            console.log(this.player);
            // get the current time in the video in seconds
            console.log(this.player.getCurrentTime());
          }
        }
      });
  }
}