import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  pageSize = 10;
  page = 1;
  public newsList = [];
  type: string;
  public sub: any;

  constructor(private _newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.type = params['Type'];
    });
    if (this.type == "Featured") {
      this._newsService.getFeaturedNews().subscribe(data => { this.newsList = data; console.log(JSON.stringify(data)) });
    }
    else if (this.type == "Trending") {
      this._newsService.getTrendingNews().subscribe(data => { this.newsList = data; });
    }
    else {
      this._newsService.getAllNews().subscribe(data => { this.newsList = data; });
    }
  }

}
