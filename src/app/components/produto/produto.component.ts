import { Component, OnInit, Inject } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.listarProdutos().subscribe((response: any) => {
      this.produtos = response.object;
      console.log(this.produtos);
    });
  }

  deleteProduto(id){
    this.produtoService.deletarProduto(id).subscribe((response: any) => {
      alert(response);
    });;
  }

  displayedColumns: string[] = ['codigo', 'nome', 'descricao', 'marca', 'opcoes'];
}
