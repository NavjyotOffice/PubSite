import { Component, OnInit } from '@angular/core';
import { EventService } from '../Services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:IEvent;
  id: number;
  public sub: any;
  url: string;

  constructor(private _eventService: EventService, private route: ActivatedRoute, private meta: Meta, private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.id = -1;
    this.url = window.location.href;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this._eventService.getEventById(this.id).subscribe(data => {
      this.event = data;
      this.meta.addTag({ name: 'og:url', content: this.url });
      this.meta.addTag({ name: 'og:type', content: 'Event' });
      this.meta.addTag({ name: 'og:title', content: this.event.ContentDetail.Title });
      this.meta.addTag({ name: 'og:description', content: this.event.ContentDetail.Description });
      this.meta.addTag({ name: 'og:image', content: this.event.ContentDetail.Image });
    });
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }
}
