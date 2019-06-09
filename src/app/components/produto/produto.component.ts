import { Component, OnInit, Inject } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Produto } from 'src/app/model/produto';
import { CadastroProdutoComponent } from '../dialogs/cadastro-produto/cadastro-produto.component';
import { AlterarProdutoComponent } from '../dialogs/alterar-produto/alterar-produto.component';
import { DeletarProdutoComponent } from '../dialogs/deletar-produto/deletar-produto.component';

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

  ngOnChange(){
      // this will be called each time userInput changes
      this.ngOnInit(); 
  }

  geraCsv(){
    this.produtoService.csvProduto().subscribe((response: any) => {
      
    });
  }

  abrirModalCadastro(){
    const dialogRef = this.dialog.open(CadastroProdutoComponent, {
      height: '100%',
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  abrirModalAlteracao(produtos: Produto){
    console.log(produtos);
    const dialogRef = this.dialog.open(AlterarProdutoComponent, {
      data: { produto: produtos},
      height: '95%',
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  abrirModalDelete(_id){
    const dialogRef = this.dialog.open(DeletarProdutoComponent, {
      data: { _id: _id},
      height: '14%',
      width: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  deleteProduto(id){
    this.produtoService.deletarProduto(id).subscribe((response: any) => {
      alert(response);
    });;
  }

  displayedColumns: string[] = ['codigo', 'nome', 'descricao', 'marca', 'opcoes'];
}