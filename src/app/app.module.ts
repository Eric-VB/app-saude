import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './login/navbar/navbar.component';
import { HomeComponent } from './login/navbar/home/home.component';
import { SobreComponent } from './login/navbar/sobre/sobre.component';
import { AppRoutes } from './app.routing';
import { ContatoComponent } from './login/navbar/contato/contato.component';
import { LocalizacaoComponent } from './login/navbar/localizacao/localizacao.component';
import { DadosComponent } from './login/navbar/localizacao/dados/dados.component';
import { ItemNavegacaoComponent } from './login/navbar/item-navegacao/item-navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    LocalizacaoComponent,
    DadosComponent,
    ItemNavegacaoComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
