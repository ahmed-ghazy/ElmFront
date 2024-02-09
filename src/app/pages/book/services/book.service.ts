import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookSearch } from '../models/book-search';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAll(search: BookSearch): Observable<any> {
    return this.http.post<any>('books', search);
  }
}
