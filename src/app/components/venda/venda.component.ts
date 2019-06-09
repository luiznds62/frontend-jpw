import { Component, OnInit } from '@angular/core';
import { Venda } from 'src/app/model/venda';
import { VendaService } from 'src/app/services/venda.service';
import { MatDialog } from '@angular/material';
import { Produto } from 'src/app/model/produto';


@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  vendas: any

  constructor(private vendaService: VendaService, public dialog: MatDialog) { }

  ngOnInit() {
    this.vendaService.listarVenda().subscribe((response: any) => {
      this.vendas = response.object;
      console.log(this.vendas);
    });
  }

  ngOnChange(){
      // this will be called each time userInput changes
      this.ngOnInit(); 
  }

  // abrirModalCadastro(){
  //   const dialogRef = this.dialog.open(CadastroProdutoComponent, {
  //     height: '100%',
  //     width: '50%'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.ngOnInit();
  //   });
  // }

  // abrirModalAlteracao(vendas: Venda){
  //   console.log(vendas);
  //   const dialogRef = this.dialog.open(AlterarProdutoComponent, {
  //     data: { vendas: vendas},
  //     height: '95%',
  //     width: '50%'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.ngOnInit();
  //   });
  // }

  // abrirModalDelete(_id){
  //   const dialogRef = this.dialog.open(DeletarProdutoComponent, {
  //     data: { _id: _id},
  //     height: '14%',
  //     width: '25%'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     this.ngOnInit();
  //   });
  // }

  displayedColumns: string[] = ['produto', 'quantidade', 'valorTotal', 'valorTotalDolar', 'opcoes'];

}
