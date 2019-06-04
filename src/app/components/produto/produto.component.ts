import { Component, OnInit, Inject } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { Produto } from 'src/app/model/produto';
import { CadastroProdutoComponent } from '../dialogs/cadastro-produto/cadastro-produto.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: Produto[]

  constructor(private produtoService: ProdutoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.produtoService.listarProdutos().subscribe((response: any) => {
      this.produtos = response.object;
      console.log(this.produtos);
    });
  }

  modalCadastro(){
    this.dialog.open(CadastroProdutoComponent, {
      width: '500px',
    });
  }

  deleteProduto(id){
    this.produtoService.deletarProduto(id).subscribe((response: any) => {
      alert(response);
    });;
  }

  displayedColumns: string[] = ['codigo', 'nome', 'descricao', 'marca', 'opcoes'];
}
