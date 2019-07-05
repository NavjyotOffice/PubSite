import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private _url:string="/api/Companyapi";

  constructor(private http:HttpClient) {

  }

  getCompanies():Observable<ICompany[]>{
    return this.http.get<ICompany[]>(this._url);
  }

  getCompanyById(id:number):Observable<ICompany>{
    return this.http.get<ICompany>(this._url+"/"+id);
  }
}
