import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _url = "/api/Contactsapi";

  constructor(private http: HttpClient) { }

  postContact(contact: IContact): Observable<IContact> {
    return this.http.post<IContact>(this._url, contact, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
