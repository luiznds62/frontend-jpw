import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatToolbarModule, MatSidenavModule, MatCheckbox, MatOptionModule, MatSelectModule, MatMenuModule, MatListModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatTableDataSource } from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { ToastrModule} from 'ngx-toastr';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { CadastroUsuariosComponent } from './components/cadastro-usuarios/cadastro-usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { VendaComponent } from './components/venda/venda.component';
import { CadastroProdutoComponent } from './components/dialogs/cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  { path: 'listarUsuarios', component: UsuariosListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastrarUsuario', component: CadastroUsuariosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosListComponent,
    CadastroUsuariosComponent,
    HomeComponent,
    ProdutoComponent,
    VendaComponent,
    CadastroProdutoComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgbModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true}
    ),
    MatTableModule ,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
