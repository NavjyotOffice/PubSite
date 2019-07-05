import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../Services/companies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company:ICompany;
  id:number;
  sub: any;
  url: string;

  constructor(private _companiesService: CompaniesService, private route: ActivatedRoute, private meta: Meta, private router: Router) {
   
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
      this.id = +params["id"];
    });

    this._companiesService.getCompanyById(this.id).subscribe(data => {
      this.company = data;
      this.meta.addTag({ name: 'og:url', content: window.location.href });
      this.meta.addTag({ name: 'og:type', content: 'Company' });
      this.meta.addTag({ name: 'og:title', content: this.company.CompanyName });
      this.meta.addTag({ name: 'og:description', content: this.company.Description });
      this.meta.addTag({ name: 'og:image', content: this.company.LogoImage });
    });

    if (this.sub != null) {
      this.sub.unsubscribe();
    }

    
  }

}
