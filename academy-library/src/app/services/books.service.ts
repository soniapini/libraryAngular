import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
    
  }

  getBooks(category: Category): Observable<Array<Book>> {
    let params: HttpParams;
    params = new HttpParams().append('category', category.description);
    return this.http.get<Array<Book>>('https://63f32ecefe3b595e2edc5d43.mockapi.io/api/v1/books', {params});
  }

  searchBooks(key: string): Observable<Array<Book>> {
    let params: HttpParams;
    params = new HttpParams().append('title', key);
    return this.http.get<Array<Book>>('https://63f32ecefe3b595e2edc5d43.mockapi.io/api/v1/books', {params});
  }

  getUncategoryzedBooks(): Observable<Book[]> {
    let params: HttpParams;
    params = new HttpParams().set('category', '');
    return this.http.get<Array<Book>>('https://63f32ecefe3b595e2edc5d43.mockapi.io/api/v1/books');
  }
}
