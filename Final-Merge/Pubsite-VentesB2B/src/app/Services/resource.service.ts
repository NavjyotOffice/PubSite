import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ResourceService {

  private _url:string="/api/Resourcesapi";

  private _urlForHome="/api/Resourcesapi?Last=4";

  constructor(private http:HttpClient) { }

  getAllResources(type:string=""):Observable<IResource[]>{
    if(type!="" && type!=null){
      return this.http.get<IResource[]>(this._urlForHome+"&Type="+type);
    }
    else{
      return this.http.get<IResource[]>(this._urlForHome);
    }
  }

  getResourceById(id:number):Observable<IResource>{
    return this.http.get<IResource>(this._url+"/"+id);
  }

  getLastWhitepaper(): Observable<IResource[]>{
    return this.http.get<IResource[]>(this._url + "?Type=Whitepaper&Last=1");
  }

  getLastVideo(): Observable<IResource[]> {
    return this.http.get<IResource[]>(this._url + "?Type=Video&Last=1");
  }

  getLastInfographics(): Observable<IResource[]> {
    return this.http.get<IResource[]>(this._url + "?Type=Infographics&Last=1");
  }

  getLastBlog(): Observable<IResource[]> {
    return this.http.get<IResource[]>(this._url + "?Type=blog&Last=1");
  }

  //
  getWhitepaper(): Observable<IResource[]> {
    return this.http.get<IResource[]>(this._url + "?Type=Whitepaper");
  }

  getVideo(): Observable<IResource[]> {
    return this.http.get<IResource[]>(this._url + "?Type=Video");
  }

  getInfographics(): Observable<IResource[]> {
    return this.http.get<IResource[]>(this._url + "?Type=Infographics");
  }

  getBlog(): Observable<IResource[]> {
    return this.http.get<IResource[]>(this._url + "?Type=blog");
  }
}
