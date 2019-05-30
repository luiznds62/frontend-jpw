import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {

  usuarioCadastroForm = new FormGroup({
    login: new FormControl(''),
    senha: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private usuarioService: UsuarioService, private toastr: ToastrService) {
    
   }

  ngOnInit() {
  }

  Cadastrar(){
    var usuarioCadastro = new Usuario;
    usuarioCadastro = this.usuarioCadastroForm.value;
    console.log(usuarioCadastro);
    this.usuarioService.cadastrarUsuario(usuarioCadastro).subscribe((response: any) => {
      var resposta = JSON.parse(response);
      if(resposta.sucesso){
        this.toastr.success(resposta.mensagem,'Sucesso')
        this.usuarioCadastroForm.reset();
      }else{
        this.toastr.error(resposta.mensagem,'Erro')
      }
    });
  }
}
