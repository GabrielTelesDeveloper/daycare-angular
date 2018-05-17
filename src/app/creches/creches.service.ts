//Decorator @injector para receber o serviço http
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Creche } from './creche/creche.model'

import { DAYCARE } from '../app.api'
import { ErrorHandler } from '../app.error-handler'
import { ServicoItem } from '../creche-detalhes/servico-item/servico-item.model';


@Injectable()
export class CrechesService {

  //Receber a injeção do serviço http
  constructor(private http: Http) { }

  creches(search?: string): Observable<Creche[]> {
    //Vamos receber um objeto do tipo response
    return this.http.get(`${DAYCARE}/creches`, { params: { q: search } })
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  //Método que busca creche por id
  crecheById(id: string): Observable<Creche> {
    return this.http.get(`${DAYCARE}/creches/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  //Trazer as avaliações de cada creche
  avaliacoesDaCreche(id: string): Observable<any> {
    return this.http.get(`${DAYCARE}/creches/${id}/avaliacoes`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  //Trazer os serviços das creches
  servicosDaCreche(id: string): Observable<ServicoItem[]> {
    return this.http.get(`${DAYCARE}/creches/${id}/servico`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}

