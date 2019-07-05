import { Component, OnInit } from '@angular/core';
import { EventService } from '../Services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  pageSize = 10;
  page = 1;
  public eventList = [];
  type: string;
  public sub: any;

  constructor(private _eventsService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.queryParams.subscribe(params => {
      this.type = params['Type'];
    });

    if (this.type == "Conference") {
      this._eventsService.getConference().subscribe(data => { this.eventList = data; });
    }
    else if (this.type == "OnDemand") {
      this._eventsService.getOnDemand().subscribe(data => { this.eventList = data; });
    }
    else if (this.type == "Live") {
      this._eventsService.getLive().subscribe(data => { this.eventList = data; });
    }
    else {
      this._eventsService.getAllEvents().subscribe(data => this.eventList = data);
    }
    
  }

}
