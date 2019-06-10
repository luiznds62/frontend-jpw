import { Component, OnInit } from '@angular/core';
import { Venda } from 'src/app/model/venda';
import { VendaService } from 'src/app/services/venda.service';
import { MatDialog } from '@angular/material';
import { Produto } from 'src/app/model/produto';
import { CadastroVendaComponent } from '../dialogs/cadastro-venda/cadastro-venda.component';
import { DeletarVendaComponent } from '../dialogs/deletar-venda/deletar-venda.component';
import { AlterarVendaComponent } from '../dialogs/alterar-venda/alterar-venda.component';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  vendas: any

  constructor(private vendaService: VendaService, private produtoService: ProdutoService, public dialog: MatDialog) { }

  ngOnInit() {
    this.vendaService.listarVenda().subscribe((response: any) => {
      this.vendas = response.object;
      this.vendas.forEach(element => {
        this.produtoService.listarPorId(element.produto).subscribe((response: any) => {
          element.produto = response.object;
        })
      });
      console.log(this.vendas);
    });
  }

  ngOnChange() {
    // this will be called each time userInput changes
    this.ngOnInit();
  }

  abrirModalCadastro() {
    const dialogRef = this.dialog.open(CadastroVendaComponent, {
      height: '63%',
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  abrirModalAlteracao(vendas: Venda) {
    const dialogRef = this.dialog.open(AlterarVendaComponent, {
      data: { vendas: vendas },
      height: '63%',
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  abrirModalDelete(_id) {
    const dialogRef = this.dialog.open(DeletarVendaComponent, {
      data: { _id: _id },
      height: '14%',
      width: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  displayedColumns: string[] = ['produto', 'quantidade', 'valorTotal', 'valorTotalDolar', 'opcoes'];

}
