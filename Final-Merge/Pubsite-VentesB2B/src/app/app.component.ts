import { Component } from '@angular/core';
import { NewsService } from './Services/news.service';
import { EventService } from './Services/event.service';
import { ResourceService } from './Services/resource.service';
import { ContactService } from './Services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { query } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Infotech';
  public news=[];
  public featuredNews=[];
  public trendingNews=[];
  public allEvents=[];
  public conferenceEvents=[];
  public onDemandEvents=[];
  public liveEvents=[];
  public allResources=[];
  public whitepaper=[];
  public videos=[]; 
  public Infographics=[]; 
  public blogs = [];
  public subscribeMsg: boolean = false;
  contact: IContact = {};

  constructor(private _newsService: NewsService, private _eventsService: EventService, private _resourcesService: ResourceService, private _contactService: ContactService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this._newsService.getAllNews("All").subscribe(data=>{this.news=data;});
    this._newsService.getAllNews("Featured").subscribe(data=>this.featuredNews=data);
    this._newsService.getAllNews("Trending").subscribe(data=>this.trendingNews=data);
    this._eventsService.getAllEvents("All").subscribe(data=>this.allEvents=data);
    this._eventsService.getAllEvents("Conference").subscribe(data=>this.conferenceEvents=data);
    this._eventsService.getAllEvents("OnDemand").subscribe(data=>this.onDemandEvents=data);
    this._eventsService.getAllEvents("Live").subscribe(data=>this.liveEvents=data);
    this._resourcesService.getAllResources("All").subscribe(data=>this.allResources=data);
    this._resourcesService.getAllResources("Whitepaper").subscribe(data=>this.whitepaper=data);
    this._resourcesService.getAllResources("Video").subscribe(data=>this.videos=data);
    this._resourcesService.getAllResources("Infographics").subscribe(data=>this.Infographics=data);
    this._resourcesService.getAllResources("blog").subscribe(data=>this.blogs=data);
  }

  subscribeClick(data: IContact): void {
    this.subscribeMsg = true;
    this._contactService.postContact(data).subscribe((data: IContact) => console.log(JSON.stringify(data)));
  }

  detailsRoute(controller: string, id: number): void {
    this.router.navigate([controller, id]);
  }

  menuListClick(controller: string, qryPara: string): void {
    console.log(qryPara);
    if (!qryPara) {
      this.router.navigate([controller]);
    } else {
      this.router.navigate([controller], { queryParams: { Type: qryPara } });
    }
  }
}
