import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private toastr: ToastrService) {
    
   }

  ngOnInit() {
  }

  cadastrar(form: NgForm){
    var usuarioCadastro = new Usuario;
    usuarioCadastro = form.value;
    this.usuarioService.cadastrarUsuario(usuarioCadastro).subscribe((response: any) => {
      var resposta = JSON.parse(response);
      if(resposta.sucesso){
        this.toastr.success(resposta.mensagem,'Sucesso')
        form.reset();
      }else{
        this.toastr.error(resposta.mensagem,'Erro')
      }
    });
  }
}
