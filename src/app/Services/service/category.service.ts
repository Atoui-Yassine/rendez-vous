import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseurl=environment.apiurl

   constructor(private http: HttpClient) { }
   getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseurl+"categories");
    
  }
}
