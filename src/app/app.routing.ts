import { Routes } from "@angular/router";

import { HomeComponent } from "./login/navbar/home/home.component";
import { SobreComponent } from "./login/navbar/sobre/sobre.component";
import { ContatoComponent } from "./login/navbar/contato/contato.component";

export const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'contato', component: ContatoComponent}
  ]