import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Book } from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = environment.baseUrl + 'books'

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl)
  }
}
