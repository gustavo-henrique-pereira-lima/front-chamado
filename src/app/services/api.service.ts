import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chamado } from '../model/Chamado';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //url da api
  private url:string = 'http://localhost:8080'

  // Construtor
  constructor(private http:HttpClient) { }

  // metodo para cadastar clientes
  solicitar(obj:Chamado):Observable<Chamado>{
    return this.http.post<Chamado>(this.url, obj);
  }

}
