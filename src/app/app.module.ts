import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ROUTES } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component'
import { ImportResolver } from '@angular/compiler';
import { CrechesComponent } from './creches/creches.component';
import { CrecheComponent } from './creches/creche/creche.component';
import { CrechesService } from './creches/creches.service';
import { CrecheDetalhesComponent } from './creche-detalhes/creche-detalhes.component';
import { LocalizacaoComponent } from './creche-detalhes/localizacao/localizacao.component';
import { ServicoItemComponent } from './creche-detalhes/servico-item/servico-item.component';
import { ServicoComponent } from './creche-detalhes/servico/servico.component';
import { AvaliacoesComponent } from './creche-detalhes/avaliacoes/avaliacoes.component';
import { DivulgarComponent } from './divulgar/divulgar.component';

//módulo do mapa
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    CrechesComponent,
    CrecheComponent,
    CrecheDetalhesComponent,
    LocalizacaoComponent,
    ServicoItemComponent,
    ServicoComponent,
    AvaliacoesComponent,
    DivulgarComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyB25O-GoozqDll1vzOPTh71JpqeX_VJfCo",
      libraries: ["places"]
    }),

  ],
  providers: [CrechesService],
  bootstrap: [AppComponent]
})
export class AppModule { }