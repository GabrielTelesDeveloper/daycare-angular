import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

//Importando o módulo de reactive forms
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import {Creche} from './creche/creche.model'
import { CrechesService } from './creches.service'

//Importando operador switch map, para que troque o observable e fazer o subscribe uma só vez
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'



@Component({
  selector: 'mt-creches',
  templateUrl: './creches.component.html',
  animations:[
    trigger('busca',[
      state('hidden',style({
        opacity: 0,
        "max-height":"0px"
      })),
      state('visible',style({
        opacity: 1,
        "max-height":"70px",
        "margin-top":"20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class CrechesComponent implements OnInit {

  //Criação de uma propriedade do nosso componente para controlar essa visibilidade
  estadoBusca = 'hidden'

  //Os dados virão injetados da classe creches.service.ts, sendo assim, será feita uma injeção de dependência
  creches: Creche[]

  //Propiedades que representam o formulário
  searchForm: FormGroup
  searchControl: FormControl

  constructor(private crechesServices: CrechesService, private fb: FormBuilder) { }

  //Esse método ngOnInit será iniciado uma vez no ciclo de vida do componente
  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    //Essa propriedade valueChanges(que é um observable), gerará um evento, e quem estiver escrito no valueChanges receberá uma notificação
    this.searchControl.valueChanges
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(searchTerm => 
      this.crechesServices.creches(searchTerm))
      .subscribe(creches => this.creches = creches)

    /*No momento em que é feito um subscribe, a requisição http vai ser feita, a resposta vai chegar, sendo mapeada para o json da resposta; receber
    essa resposta no listener(lista de creches), e por fim eu pego essa lista de creches e jogo na propiedade creches
    */
    this.crechesServices.creches().subscribe(creches => this.creches = creches)
  }

  barraDeBusca(){
    this.estadoBusca = this.estadoBusca == 'hidden' ? 'visible':'hidden'
  }

}
