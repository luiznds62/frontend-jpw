import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/model/usuario';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  usuarios: Usuario[];
  displayedColumns = [];
  dataSource; 

  constructor(private usuarioService: UsuarioService, private toastr: ToastrService) { 

  }

  ngOnInit() {
    // this.usuarioService.listarUsuarios().subscribe((response: any) =>{
    //   response.forEach(res => {
    //     var user = new Usuario;
    //     user._id =res._id;
    //     user.usuario = res.usuario;
    //     user.email = res.email;
    //     user.senha = res.senha;
    //     this.usuarios.push(user);
    //   }); 
    // });
    // this.dataSource = new MatTableDataSource<Usuario>(this.usuarios);
  }

}
