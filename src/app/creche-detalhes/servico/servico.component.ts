import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CrechesService } from '../../creches/creches.service'
import { Observable } from 'rxjs/Observable'
import { ServicoItem } from '../servico-item/servico-item.model';
import {Creche} from '../../creches/creche/creche.model'


@Component({
  selector: 'daycare-servico',
  templateUrl: './servico.component.html'
})
export class ServicoComponent implements OnInit {

  servico: Observable<ServicoItem[]>
  @Input() creche: Creche

  constructor(private crechesService: CrechesService, private route: ActivatedRoute) { }

  ngOnInit() {
    //Pegar referência do menu do restaurante
    this.servico = this.crechesService.servicosDaCreche(this.route.parent.snapshot.params['id'])
  }

}
