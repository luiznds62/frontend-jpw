import { Component, OnInit, Inject } from '@angular/core';
import { VendaService } from 'src/app/services/venda.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-deletar-venda',
  templateUrl: './deletar-venda.component.html',
  styleUrls: ['./deletar-venda.component.css']
})
export class DeletarVendaComponent implements OnInit {

  constructor(private vendaService: VendaService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  deletarVenda(){
    this.vendaService.deletarVenda(this.data._id).subscribe((response: any) => {
      this.toastr.success(response.message, 'Sucesso');
    });
  }
}
