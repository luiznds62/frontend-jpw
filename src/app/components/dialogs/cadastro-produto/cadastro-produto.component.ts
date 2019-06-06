import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProdutoService } from 'src/app/services/produto.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Produto } from 'src/app/model/produto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  produtoCadastroForm = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    descricao: new FormControl(''),
    marca: new FormControl(''),
    valorUnitario: new FormControl(''),
    origem: new FormControl('')
  });

  constructor(private produtoService: ProdutoService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  cadastrar() {
    var produto = this.produtoCadastroForm.value;
    this.produtoService.cadastrarProduto(produto).subscribe((response: any) => {
      var resposta = JSON.parse(response);
      if (resposta.sucesso) {
        this.toastr.success(resposta.mensagem, 'Sucesso')
      } else {
        this.toastr.error(resposta.mensagem, 'Erro')
      }
    });
  }
}
