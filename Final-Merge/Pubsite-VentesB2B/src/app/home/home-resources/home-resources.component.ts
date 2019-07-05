import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../Services/resource.service';

@Component({
  selector: 'app-home-resources',
  templateUrl: './home-resources.component.html',
  styleUrls: ['./home-resources.component.css']
})
export class HomeResourcesComponent implements OnInit {
  allResources=[];
  whitepaper=[];
  videos=[]; 
  Infographics=[]; 
  blogs=[];

  constructor(private _resourcesService:ResourceService) { }

  ngOnInit() {
    this._resourcesService.getAllResources("All").subscribe(data=>this.allResources=data);
    this._resourcesService.getAllResources("Whitepaper").subscribe(data=>this.whitepaper=data);
    this._resourcesService.getAllResources("Video").subscribe(data=>this.videos=data);
    this._resourcesService.getAllResources("Infographics").subscribe(data=>this.Infographics=data);
    this._resourcesService.getAllResources("blog").subscribe(data=>this.blogs=data);
  }

}