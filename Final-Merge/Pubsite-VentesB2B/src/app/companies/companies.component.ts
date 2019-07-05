import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../Services/companies.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  pageSize = 10;
  page = 1;
  companyList = [];

  constructor(private _companiesService:CompaniesService) { }

  ngOnInit() {
    this._companiesService.getCompanies().subscribe(data=>this.companyList=data);
  }

}
