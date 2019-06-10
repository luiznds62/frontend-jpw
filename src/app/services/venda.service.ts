import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Venda } from '../model/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  // API URL
  private readonly apiUrl = 'http://127.0.0.1:3000'

  constructor(private http: HttpClient) {

  }

  csvVenda() {
    return this.http.get(this.apiUrl + "/api/venda/relatorio/venda")
  }

  listarVenda() {
    return this.http.get(this.apiUrl + '/api/venda/')
  }

  listarPorId(id) {
    return this.http.get(this.apiUrl + '/api/venda/' + id)
  }

  consolideVendaProduto(idProduto){
    return this.http.get(this.apiUrl + '/api/venda/consolide/' + idProduto)
  }

  cadastrarVenda(venda: Venda) {
    return this.http.post(this.apiUrl + `/api/venda`, venda, { responseType: 'text' })
  }

  alterarVenda(venda: Venda, id: string) {
    return this.http.put(this.apiUrl + `/api/venda/` + id, venda, { responseType: 'text' })
  }

  deletarVenda(id) {
    return this.http.delete(this.apiUrl + '/api/venda/' + id)
  }
}
