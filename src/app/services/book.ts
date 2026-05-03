import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class Book {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  getTopBooks(query: string = 'top books'): Observable<any[]> {
    const url = `${this.apiUrl}?q=${query}&orderBy=relevance&maxResults=20&key=${environment.googleBooksApiKey}`;
    
    return this.http.get<any>(url).pipe(
      map(response => response.items || [])
    );
  }
}
