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

  erroRepeticaoSenha: boolean = false;

  usuarioCadastroForm = new FormGroup({
    usuario: new FormControl(''),
    repeticaoSenha: new FormControl(''),
    senha: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private usuarioService: UsuarioService, private toastr: ToastrService) {
    
   }

  ngOnInit() {
  }

  limpaErroRepeticao(){
    this.erroRepeticaoSenha = false;
  }

  verificarRepeticao(){
    if(this.usuarioCadastroForm.value.senha){
      if(this.usuarioCadastroForm.value.repeticaoSenha){
        if(this.usuarioCadastroForm.value.senha != this.usuarioCadastroForm.value.repeticaoSenha){
          this.erroRepeticaoSenha = true;
        }else{
          this.erroRepeticaoSenha = false;
        }
      }
    }
    if(this.usuarioCadastroForm.value.repeticaoSenha == ""){
      this.erroRepeticaoSenha = false;
    }
  }

  cadastrar(){
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
