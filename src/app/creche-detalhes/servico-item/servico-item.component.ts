import { Component, OnInit, Input } from '@angular/core';

//Importando modelo servico-item
import {ServicoItem} from './servico-item.model'

@Component({
  selector: 'mt-servico-item',
  templateUrl: './servico-item.component.html'
})
export class ServicoItemComponent implements OnInit {


  //Esse decorator imput quer dizer que os dados virão do componente parent
  @Input() servicoItem: ServicoItem

  constructor() { }

  ngOnInit() {
  }

}
