import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class AppService {
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }
  
  constructor(private http: HttpClient) {}
  
  saveNote(title: string, note: string): Observable<object> {
    return this.http.post(`${environment.apiUrl}/saveNote`, {title: title, note: note}, this.httpOptions)
  }

  retrieveNote(title: string): Observable<string[]> {
    return this.http.post(`${environment.apiUrl}/retrieveNote`, {title: title}, this.httpOptions).pipe(map((response) => response as string[]))
  }

  deleteNote(title: string, note: string): Observable<any>{
    return this.http.post(`${environment.apiUrl}/delete-note`, {title: title, note: note}, this.httpOptions)
  }
}
