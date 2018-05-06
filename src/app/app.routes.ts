//Módulo de roteamento - definindo as rotas do projeto
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SobreComponent } from "./sobre/sobre.component";
import { CrechesComponent } from "./creches/creches.component";
import { CrecheDetalhesComponent } from "./creche-detalhes/creche-detalhes.component";
import { ServicoComponent } from "./creche-detalhes/servico/servico.component";
import { AvaliacoesComponent } from "./creche-detalhes/avaliacoes/avaliacoes.component";
import { DivulgarComponent } from "./divulgar/divulgar.component";

//Array para definir as rotas, tanto rotas pais como rotas filhas
export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'creches', component: CrechesComponent},
    {path: 'creches/:id', component: CrecheDetalhesComponent,
    children: [
        {path: '', redirectTo: 'servico', pathMatch: 'full'},
        {path: 'servico', component: ServicoComponent},
        {path: 'avaliacoes', component: AvaliacoesComponent}
    ]},
    {path: 'sobre', component: SobreComponent},
    {path: 'divulgar', component: DivulgarComponent}
]

