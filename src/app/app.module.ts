import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './login/navbar/navbar.component';
import { HomeComponent } from './login/navbar/home/home.component';
import { SobreComponent } from './login/navbar/sobre/sobre.component';
import { AppRoutes } from './app.routing';
import { ContatoComponent } from './login/navbar/contato/contato.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    
    HomeComponent,
    SobreComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
