import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http:HttpClient) {}
  getSearchResponce(searchQuery : string): Observable<string>{
    return this.http.get<string>('/assets/response.json');
  }
}
