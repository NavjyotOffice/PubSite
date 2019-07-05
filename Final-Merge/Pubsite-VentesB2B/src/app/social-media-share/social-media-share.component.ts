import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-share',
  templateUrl: './social-media-share.component.html',
  styleUrls: ['./social-media-share.component.css']
})
export class SocialMediaShareComponent implements OnInit {

  href: string;
  FacebookShare: string;
  TwitterShare: string;
  LinkedinShare: string;

  constructor() { }

  ngOnInit() {
    this.href = window.location.href;
    this.FacebookShare = 'https://www.facebook.com/sharer/sharer.php?u=' + this.href;
    this.TwitterShare = 'https://twitter.com/share?url=' + this.href;
    this.LinkedinShare = 'http://www.linkedin.com/shareArticle?mini=true&url=' + this.href;
  }
  
}
