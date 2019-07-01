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
  private readonly apiUrl = 'http://backend-jpw.herokuapp.com'

  constructor(private http: HttpClient) { 

  }

  csvProduto(){
    return this.http.get(this.apiUrl + "/api/produto/relatorio/produto")
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

  alterarProduto(produto: Produto, id: string){
    return this.http.put(this.apiUrl + `/api/produto/` + id, produto , {responseType: 'text'})
  }

  deletarProduto(id){
    return this.http.delete(this.apiUrl + '/api/produto/'+ id)
  }
}
