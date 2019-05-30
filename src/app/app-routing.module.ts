import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroUsuariosComponent } from './components/cadastro-usuarios/cadastro-usuarios.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { AlterarSenhaUsuarioComponent } from './components/alterar-senha-usuario/alterar-senha-usuario.component';
import { CadastroProdutosComponent } from './components/cadastro-produtos/cadastro-produtos.component';
import { ListagemProdutosComponent } from './components/listagem-produtos/listagem-produtos.component';
import { CadastroVendasComponent } from './components/cadastro-vendas/cadastro-vendas.component';
import { ListagemVendasComponent } from './components/listagem-vendas/listagem-vendas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: CadastroUsuariosComponent},
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'cadastroUsuario', component: CadastroUsuariosComponent},
      { path: 'alterarSenha', component: AlterarSenhaUsuarioComponent},

      { path: 'cadastroProduto', component: CadastroProdutosComponent},
      { path: 'listagemProduto', component: ListagemProdutosComponent},

      { path: 'cadastroVenda', component: CadastroVendasComponent},
      { path: 'listagemVenda', component: ListagemVendasComponent},
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
