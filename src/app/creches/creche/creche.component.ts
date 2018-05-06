import { Component, OnInit, Input } from '@angular/core';

//Importando a parte de modelo
import {Creche} from './creche.model'

@Component({
  selector: 'main-creche',
  templateUrl: './creche.component.html'
})
export class CrecheComponent implements OnInit {

  //Passando decorator input para que os dados possam ser passados para outros componentes
  @Input() creche: Creche

  constructor() { }

  ngOnInit() {
  }

}
