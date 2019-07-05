import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { EventService } from '../Services/event.service';
import { ResourceService } from '../Services/resource.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})

export class MostPopularComponent implements OnInit {
  LastTrendingNews: INews;
  LastFeaturedNews: INews;
  LastWhitepaper: IResource;
  LastBlog: IResource;
  LastLive: IEvent;

  constructor(private _newsService: NewsService, private _eventService: EventService, private _resourceService: ResourceService) { }

  ngOnInit() {

    /*News*/
    this._newsService.getLastFeaturedNews().subscribe(data => this.LastFeaturedNews = data[0]);
    this._newsService.getLastTrendingNews().subscribe(data => this.LastTrendingNews = data[0]);

    /*Event*/
    this._eventService.getLastLive().subscribe(data => { this.LastLive = data[0]});

    /*Resource*/
    this._resourceService.getLastWhitepaper().subscribe(data => this.LastWhitepaper = data[0]);
    this._resourceService.getLastBlog().subscribe(data => this.LastBlog = data[0]);

  }

}
