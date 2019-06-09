import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProdutoService } from 'src/app/services/produto.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

  produtoCadastroForm = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    descricao: new FormControl(''),
    marca: new FormControl(''),
    valorUnitario: new FormControl(''),
    origem: new FormControl('')
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private produtoService: ProdutoService, private toastr: ToastrService) { }

  ngOnInit() {

  }

  alterar() {
    var produto = this.produtoCadastroForm.value;
    this.produtoService.alterarProduto(produto,this.data.produto._id).subscribe((response: any) => {
      var resposta = JSON.parse(response);
      if (resposta.sucesso) {
        this.toastr.success(resposta.mensagem, 'Sucesso')
      } else {
        this.toastr.error(resposta.mensagem, 'Erro')
      }
    });
  }

}
