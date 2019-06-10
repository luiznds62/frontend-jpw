import { Component, OnInit, Inject } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { VendaService } from 'src/app/services/venda.service';
import { ToastrService } from 'ngx-toastr';
import { Venda } from 'src/app/model/venda';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from 'src/app/model/produto';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alterar-venda',
  templateUrl: './alterar-venda.component.html',
  styleUrls: ['./alterar-venda.component.css']
})
export class AlterarVendaComponent implements OnInit {
  produtos: Produto[]
  
  vendaCadastroForm = new FormGroup({
    produto: new FormControl(''),
    quantidade: new FormControl(''),
  });

  produtoSelecionado =  ""

  constructor(private produtoService: ProdutoService,
    private vendaService: VendaService, private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.produtoSelecionado = this.data.vendas.produto[0].nome;
    this.produtoService.listarProdutos().subscribe((response: any) => {
      this.produtos = response.object;
    })
  }

  alterar() {
    var usuarioId = sessionStorage.getItem('userid');
    var venda: Venda = {
      _id: '',
      id: (Math.random() * (9999 - 1) + 1).toString(),
      produto: this.produtoSelecionado,
      usuarioCadastro: usuarioId,
      quantidade: this.vendaCadastroForm.value.quantidade,
      valorTotal: 0,
      valorTotalDolar: 0
    }

    console.log(venda)
    this.vendaService.cadastrarVenda(venda).subscribe((response: any) => {
      this.toastr.success(response.mensagem);
    })
  }

}
