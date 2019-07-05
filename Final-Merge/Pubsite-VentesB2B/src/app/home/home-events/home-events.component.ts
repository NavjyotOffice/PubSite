import { Component, OnInit } from '@angular/core';
import { EventService } from '../../Services/event.service';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrls: ['./home-events.component.css']
})
export class HomeEventsComponent implements OnInit {
  public allEvents = [];
  public conferenceEvents=[];
  public onDemandEvents=[];
  public liveEvents=[];

  constructor(public _eventsService:EventService) { }

  ngOnInit() {
    this._eventsService.getAllEvents("All").subscribe(data=>this.allEvents=data);
    this._eventsService.getAllEvents("Conference").subscribe(data=>this.conferenceEvents=data);
    this._eventsService.getAllEvents("OnDemand").subscribe(data=>this.onDemandEvents=data);
    this._eventsService.getAllEvents("Live").subscribe(data=>this.liveEvents=data);
  }

}
