import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // API URL
  private readonly apiUrl = 'http://127.0.0.1:3000'

  constructor(private http: HttpClient) { 

  }

  listarProdutos(){
    return this.http.get(this.apiUrl + '/api/produto/')
  }

  listarPorId(id){
    return this.http.get(this.apiUrl + '/api/produto/'+ id)
  }

  cadastrarProduto(produto: Produto){
    return this.http.post(this.apiUrl + `/api/produto`, produto , {responseType: 'text'})
  }

  alterarProduto(produto: Produto, id){
    return this.http.put(this.apiUrl + `/api/produto/` + id, produto , {responseType: 'text'})
  }

  deletarProduto(id){
    return this.http.delete(this.apiUrl + '/api/produto/'+ id)
  }
}
