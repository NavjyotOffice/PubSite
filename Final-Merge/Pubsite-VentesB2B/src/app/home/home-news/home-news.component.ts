import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Services/news.service';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {
  public news=[];
  public featuredNews=[];
  public trendingNews=[];
  constructor(public _newsService:NewsService) { }

  ngOnInit() {
    this._newsService.getAllNews("All").subscribe(data=>{this.news=data;});
    this._newsService.getAllNews("Featured").subscribe(data=>this.featuredNews=data);
    this._newsService.getAllNews("Trending").subscribe(data=>this.trendingNews=data);
  }
}
