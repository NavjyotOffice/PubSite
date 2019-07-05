import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsService } from './Services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeNewsComponent } from './home/home-news/home-news.component';
import { HomeEventsComponent } from './home/home-events/home-events.component';
import { HomeResourcesComponent } from './home/home-resources/home-resources.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupBoxComponent } from './popup-box/popup-box.component';

import { FormsModule } from '@angular/forms';
import { SocialMediaShareComponent } from './social-media-share/social-media-share.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeNewsComponent,
    HomeEventsComponent,
    HomeResourcesComponent,
    NewsComponent,
    EventsComponent,
    ResourcesComponent,
    HomeComponent,
    CompaniesComponent,
    NewsDetailsComponent,
    EventDetailsComponent,
    ResourceDetailsComponent,
    CompanyDetailsComponent,
    MostPopularComponent,
    PopupBoxComponent,
    SocialMediaShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents: [
    PopupBoxComponent
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
