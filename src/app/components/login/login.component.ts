import { Component, OnInit, Injector } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioForm = new FormGroup({
    usuario: new FormControl(''),
    senha: new FormControl(''),
  });

  erroLogin: boolean = false
  constructor(private usuarioService: UsuarioService,
              private toastr: ToastrService,
              private route: Router) {

  }

  ngOnInit() {
    //this.usuarioService.listarUsuarios().subscribe(console.log);
  }

  Logar() {
    this.usuarioService.login(this.usuarioForm.value.usuario, this.usuarioForm.value.senha).subscribe((response: any) => {
      var resposta = JSON.parse(response);
      if(resposta.sucesso){
        this.toastr.success(resposta.mensagem,'Sucesso')
        this.erroLogin = false
        this.route.navigateByUrl('/home');
        sessionStorage.setItem('userid',resposta.object[0]._id)
      }else{
        this.toastr.error(resposta.mensagem,'Erro')
        this.erroLogin = true
      }
    },err => this.toastr.error('Usuário não encontrado','Erro'));
  }
}
