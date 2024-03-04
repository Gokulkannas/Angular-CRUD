import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crud } from '../crud/crud.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiurl = 'http://localhost:1212/users';
  constructor(private httpclient: HttpClient) {}

  id?:number;

  getAllList(): Observable<Crud[]> {
    return this.httpclient.get<Crud[]>(this.apiurl);
  }

  deleteCrud(id: number): Observable<Crud> {
    return this.httpclient.delete<Crud>(this.apiurl + '/' + id);
  }
}
