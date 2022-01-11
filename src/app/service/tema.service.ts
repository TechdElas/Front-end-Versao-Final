import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) {}

  token = {

    headers: new HttpHeaders().set('Authorization', environment.token )

   }

   getAllTema(): Observable<Tema[]>{
     return this.http.get<Tema[]>('http://techdelas.heroku.com/tema', this.token)



   }
   getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`http://techdelas.heroku.com/tema/${id}`, this.token)


  }


   postTema(tema: Tema): Observable<Tema>{
     return this.http.post<Tema>('http://techdelas.heroku.com/tema', tema, this.token)


   }

   putTema(tema: Tema): Observable<Tema>{
     return this.http.put<Tema>("http://techdelas.heroku.com/tema", tema, this.token)
   }

   deleteTema(id: number) {
    return this.http.delete(`http://techdelas.heroku.com/tema/${id}`, this.token)
   }
}
