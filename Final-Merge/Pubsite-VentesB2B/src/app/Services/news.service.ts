import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _url:string="/api/Newsapi";
  private _urlForHome:string=this._url+"?Last=4";

  constructor(private http:HttpClient) {
  }

  getAllNews(type:string=""):Observable<INews[]>{
    if(type!="" && type!=null){
      return this.http.get<INews[]>(this._urlForHome+"&Type="+type);
    }
    else{
      return this.http.get<INews[]>(this._urlForHome);
    }
  }

  getNewsById(id: number): Observable<INews>{
    return this.http.get<INews>(this._url+"/"+id);
  }

  getLastFeaturedNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this._url + "?Type=Featured&Last=1");
  }

  getLastTrendingNews():Observable<INews[]> {
    return this.http.get<INews[]>(this._url + "?Type=Trending&Last=1");
  }

  getFeaturedNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this._url + "?Type=Featured");
  }

  getTrendingNews(): Observable<INews[]> {
    return this.http.get<INews[]>(this._url + "?Type=Trending");
  }
}
