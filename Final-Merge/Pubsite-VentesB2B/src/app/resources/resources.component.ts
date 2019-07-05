import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../Services/resource.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  pageSize = 10;
  page = 1;
  resourcesList = [];
  type: string;
  public sub: any;

  constructor(private _resourceService: ResourceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.type = params['Type'];
    });
    if (this.type == "Whitepaper") {
      this._resourceService.getWhitepaper().subscribe(data => { this.resourcesList = data; });
    }
    else if (this.type == "Video") {
      this._resourceService.getVideo().subscribe(data => { this.resourcesList = data; });
    }
    else if (this.type == "Infographics") {
      this._resourceService.getInfographics().subscribe(data => { this.resourcesList = data; });
    }
    else if (this.type == "Blog") {
      this._resourceService.getBlog().subscribe(data => { this.resourcesList = data; });
    }
    else {
      this._resourceService.getAllResources().subscribe(data => this.resourcesList = data);
    }
    
  }

}
