import { Component, OnInit, Injector } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erroLogin: boolean = false
  constructor(private usuarioService: UsuarioService, private toastr: ToastrService) {

  }

  ngOnInit() {
    //this.usuarioService.listarUsuarios().subscribe(console.log);
  }

  Logar(form: NgForm) {
    this.usuarioService.login(form.value.usuario, form.value.senha).subscribe((response: any) => {
      if(response === 'Login realizado com sucesso'){
        this.toastr.success('Login realizado!','Sucesso')
        this.erroLogin = false
      }else{
        this.toastr.error('Usuário ou senha inválidos','Erro')
        this.erroLogin = true
      }
    });
  }
}
