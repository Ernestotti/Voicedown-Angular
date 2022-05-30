import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  
  get(): Observable<Record<string,string>> {
    return this.http.get('http://localhost:3001/get', this.httpOptions).pipe(map((response) => response as Record<string,string>))
  }

  saveNote(title: string, note: string): Observable<object> {
    return this.http.post('http://localhost:3001/saveNote', {title: title, note: note}, this.httpOptions)
  }

  retrieveNote(title: string): Observable<object> {
    return this.http.post('http://localhost:3001/retrieveNote', {title: title}, this.httpOptions)
  }
}
