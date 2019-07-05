import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'News', component:NewsComponent },
  { path:'Events', component:EventsComponent },
  { path:'Resources', component:ResourcesComponent },
  { path:'Companies', component:CompaniesComponent },
  { path:'NewsDetails/:id', component: NewsDetailsComponent },
  { path:'EventDetails/:id', component: EventDetailsComponent },
  { path:'ResourceDetails/:id', component: ResourceDetailsComponent },
  { path:'CompanyDetails/:id', component: CompanyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
