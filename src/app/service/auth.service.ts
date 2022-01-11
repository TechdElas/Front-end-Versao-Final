import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
private http: HttpClient,



  ) { }

entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
  return this.http.post<UsuarioLogin>('http://techdelas.herokuapp.com/usuarios/logar', usuarioLogin)


}

cadastrar(usuario: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>('http://techdelas.herokuapp.com/usuarios/cadastrar', usuario)


}
getByIdUsuario(id: number): Observable<Usuario>{

  return this.http.get<Usuario>(`http://techdelas.herokuapp.com/usuarios/${id}`)
}

logado(){

  let ok: boolean = false

  if(environment.token != ''){
    ok = true


  }
  return ok
}

adm(){
  let ok: boolean = false

  if (environment.tipo == 'adm'){
    ok = true
  }

  return ok
}

}




