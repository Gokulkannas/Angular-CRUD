import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud } from './crud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiurl="http://localhost:1212/users"
  constructor(private httpclient:HttpClient) { }

  createCrud(crud: Crud):Observable<Crud>{
    return this.httpclient.post<Crud>(this.apiurl,crud);
  }

  getAllList():Observable<Crud[]>{
    return this.httpclient.get<Crud[]>(this.apiurl);
  }

}
