import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { FormGroup, FormControl } from '@angular/forms';
import { VendaService } from 'src/app/services/venda.service';
import { ToastrService } from 'ngx-toastr';
import { Venda } from 'src/app/model/venda';

@Component({
  selector: 'app-cadastro-venda',
  templateUrl: './cadastro-venda.component.html',
  styleUrls: ['./cadastro-venda.component.css']
})
export class CadastroVendaComponent implements OnInit {

  vendaCadastroForm = new FormGroup({
    produto: new FormControl(''),
    quantidade: new FormControl(''),
  });

  produtos: Produto[]
  produtoSelecionado = "";

  constructor(private produtoService: ProdutoService, private vendaService: VendaService,private toastr: ToastrService) { }

  ngOnInit() {
    this.produtoService.listarProdutos().subscribe((response: any) => {
      this.produtos = response.object;
    })
  }

  cadastrar() {
    var usuarioId = sessionStorage.getItem('userid');
    var venda: Venda = {
      _id: '',
      id: ( Math.random() * (9999 - 1) + 1).toString(),
      produto: this.produtoSelecionado,
      usuarioCadastro: usuarioId,
      quantidade: this.vendaCadastroForm.value.quantidade,
      valorTotal: 0,
      valorTotalDolar: 0
    }

    console.log(venda)
    this.vendaService.cadastrarVenda(venda).subscribe((response: any) => {
      this.toastr.success(response.mensagem,'Sucesso');
    })
  }
}
