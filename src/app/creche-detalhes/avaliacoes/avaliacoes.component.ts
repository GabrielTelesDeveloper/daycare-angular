import { Component, OnInit } from '@angular/core';
//Injetar o serviço
import {ActivatedRoute} from '@angular/router'
import {CrechesService} from '../../creches/creches.service'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-avaliacoes',
  templateUrl: './avaliacoes.component.html'
})
export class AvaliacoesComponent implements OnInit {

  
  avaliacoes: Observable<any>

  constructor(private crechesService: CrechesService, private route: ActivatedRoute) { }

  //Avaliação da creche escolhida
  ngOnInit() {
    this.avaliacoes = this.crechesService.avaliacoesDaCreche(this.route.parent.snapshot.params['id'])
  }

}
