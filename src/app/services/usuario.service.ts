import { Usuario } from '../model/usuario';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // API URL
  private readonly apiUrl = 'http://backend-jpw.herokuapp.com'

  constructor(private http: HttpClient) { 

  }

  listarUsuarios(){
    return this.http.get<Usuario[]>(this.apiUrl + '/api/usuario/')
  }

  login(usuario: string, senha: string){
    return this.http.get(this.apiUrl + `/api/usuario/login/${usuario}/${senha}` ,{responseType: 'text'})
  }

  cadastrarUsuario(usuario: Usuario){
    return this.http.post(this.apiUrl + `/api/usuario`, usuario , {responseType: 'text'})
  }
}
