import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrecheService } from './services/creche.service';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CrecheComponent } from './componentes/creche/creche.component';
import { CardCrecheComponent } from './componentes/card-creche/card-creche.component';
import { IndexComponent } from './componentes/index/index.component';
import { IdCrecheComponent } from './componentes/id-creche/id-creche.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { NewCrecheComponent } from './componentes/new-creche/new-creche.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ContatoCrecheComponent } from './componentes/contato-creche/contato-creche.component';


const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'creche', component: CrecheComponent },
  { path: 'creche/:id', component: IdCrecheComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'new', component: NewCrecheComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrecheComponent,
    CardCrecheComponent,
    IndexComponent,
    IdCrecheComponent,
    MapaComponent,
    NewCrecheComponent,
    SobreComponent,
    ContatoCrecheComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    ToastModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBIbmZFYduS3VCIWPiPPymTvjW-NE0igfk",
      libraries: ["places"]
    }),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CrecheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
