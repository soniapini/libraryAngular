import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
    
  }

  getMessages(): Observable<Array<Book>> {

    let params: HttpParams;

    params = new HttpParams().set('category', 'NARRATIVA');

    return this.http.get<Array<Book>>('https://63f32ecefe3b595e2edc5d43.mockapi.io/api/v1/books', {params});
  }




}
