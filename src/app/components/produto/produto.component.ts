import { Component, OnInit, Inject } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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

  abrirModalCadastro(){
    this.dialog.open(CadastroProdutoComponent, {
      height: '90%',
      width: '50%'
    });
  }

  deleteProduto(id){
    this.produtoService.deletarProduto(id).subscribe((response: any) => {
      alert(response);
    });;
  }

  displayedColumns: string[] = ['codigo', 'nome', 'descricao', 'marca', 'opcoes'];
}