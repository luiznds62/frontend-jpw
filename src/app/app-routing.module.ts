import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroUsuariosComponent } from './components/cadastro-usuarios/cadastro-usuarios.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { VendaComponent } from './components/venda/venda.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: CadastroUsuariosComponent},
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'cadastroUsuario', component: CadastroUsuariosComponent},
      { path: 'produto', component: ProdutoComponent},
      { path: 'venda', component: VendaComponent},
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
