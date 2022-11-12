import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { AuthorDetail } from "./author-detail";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private  http: HttpClient) { }

  private apiUrl: string = environment.baseUrl + 'authors'

  getAuthors(): Observable<AuthorDetail[]> {
    return this.http.get<AuthorDetail[]>(this.apiUrl)
  }

  getAuthor(id: string): Observable<AuthorDetail> {
    return this.http.get<AuthorDetail>(this.apiUrl + "/" + id);
  }
}
