import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Category } from '../models/category';
import { CategoryType } from '../models/category-type';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  getDefaultCategories(): Observable<Array<Category>> {
    return this.getCategories(CategoryType.DEFAULT);
  }

  getCustomCategories(): Observable<Array<Category>> {
    return this.getCategories(CategoryType.CUSTOM);
  }

  addNewCategory(category: Category): Observable<Category> {
    return this.http.post<Category>("https://63f32ecefe3b595e2edc5d43.mockapi.io/api/v1/categories", category);
  }

  private getCategories(type: CategoryType) {
    let params: HttpParams;
    params = new HttpParams().set('type', type)
    return this.http.get<Array<Category>>('https://63f32ecefe3b595e2edc5d43.mockapi.io/api/v1/categories', {params});
  }




}
