import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ListUsuariosComponent } from './dashboard/list-usuarios/list-usuarios.component';
import { LayoutComponent } from './layout/layout.component';
import { CardUsuarioComponent } from './dashboard/list-usuarios/card-usuario/card-usuario.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingComponent } from './dashboard/loading/loading.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    ListUsuariosComponent,
    NavbarComponent,
    CardUsuarioComponent,
    LayoutComponent,
    LoadingComponent,
    UsuarioComponent



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
