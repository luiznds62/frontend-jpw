import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Material
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatTableDataSource } from '@angular/material';

import { ToastrModule} from 'ngx-toastr';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { CadastroUsuariosComponent } from './components/cadastro-usuarios/cadastro-usuarios.component';

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
    CadastroUsuariosComponent
  ],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
