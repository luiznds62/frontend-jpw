import { Component, OnInit, Inject } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService,
              private toastr: ToastrService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  deletarProduto(){
    this.produtoService.deletarProduto(this.data._id).subscribe((response: any) => {
      this.toastr.success(response.message, 'Sucesso');
    });
  }
}
