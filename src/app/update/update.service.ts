import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crud } from '../crud/crud.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private apiurl = 'http://localhost:1212/users';
  constructor(private httpclient: HttpClient) {}

  getById(id: number): Observable<Crud> {
    return this.httpclient.get<Crud>(this.apiurl+ '/' + id);
  }
  updateCrud(id: number, updatedCurd: Crud): Observable<Crud> {
    return this.httpclient.put<Crud>(this.apiurl + '/' + id, updatedCurd);
  }
}
