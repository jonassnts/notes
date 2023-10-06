import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from './notas/nota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }
  private readonly API = 'http://localhost:3000/notas'

  listar(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.API)
  }

  criar(nota: Nota): Observable<Nota>{
    return this.http.post<Nota>(this.API, nota)
  }

  buscarPorId(id: number): Observable <Nota> {
    const url = `${this.API}/${id}`
    return this.http.get<Nota>(url)
  }

  excluir(id: number): Observable <Nota> {
    const url = `${this.API}/${id}`
    return this.http.get<Nota>(url)
  }
}
