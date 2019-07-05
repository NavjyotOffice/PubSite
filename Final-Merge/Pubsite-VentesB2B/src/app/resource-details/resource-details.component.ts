import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../Services/resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {
  resource:IResource;
  id:number;
  sub: any;
  url: string;

  constructor(private _resourceService: ResourceService, private route: ActivatedRoute, private meta: Meta, private router: Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.id = +params['id'];
    });
    this._resourceService.getResourceById(this.id).subscribe(data => {
      this.resource = data;
      this.meta.addTag({ name: 'og:url', content: this.url });
      this.meta.addTag({ name: 'og:type', content: 'Event' });
      this.meta.addTag({ name: 'og:title', content: this.resource.ContentDetail.Title });
      this.meta.addTag({ name: 'og:description', content: this.resource.ContentDetail.Description });
      this.meta.addTag({ name: 'og:image', content: this.resource.ContentDetail.Image });
    });
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }

}
