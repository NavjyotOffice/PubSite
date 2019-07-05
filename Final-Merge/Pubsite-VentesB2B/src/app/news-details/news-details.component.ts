import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news: INews;
  id: number;
  public sub: any;
  url: string;

  constructor(private _newsService: NewsService, private route: ActivatedRoute, private meta: Meta, private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this._newsService.getNewsById(this.id).subscribe(data => {
      this.news = data;
      this.meta.addTag({ name: 'og:url', content: this.url });
      this.meta.addTag({ name: 'og:type', content: 'Company' });
      this.meta.addTag({ name: 'og:title', content: this.news.ContentDetail.Title });
      this.meta.addTag({ name: 'og:description', content: this.news.ContentDetail.Description });
      this.meta.addTag({ name: 'og:image', content: this.news.ContentDetail.Image });
    });
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }

}
