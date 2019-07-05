import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _url:string="/api/Eventsapi";
  private _urlForHome="/api/Eventsapi?Last=4";

  constructor(private http:HttpClient) { }

  getAllEvents(type:string=""):Observable<IEvent[]>{
    if(type!="" && type!=null){
      return this.http.get<IEvent[]>(this._urlForHome+"&Type="+type);
    }
    else{
      return this.http.get<IEvent[]>(this._urlForHome);
    }
  }

  getEventById(id:number):Observable<IEvent>{
    return this.http.get<IEvent>(this._url+"/"+id);
  }

  getLastConference(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this._url + "?Type=Conference&Last=1");
  }
  getLastOnDemand(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this._url + "?Type=OnDemand&Last=1");
  }
  getLastLive(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this._url + "?Type=Live&Last=1");
  }
  //
  getConference(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this._url + "?Type=Conference");
  }
  getOnDemand(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this._url + "?Type=OnDemand");
  }
  getLive(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this._url + "?Type=Live");
  }
}
