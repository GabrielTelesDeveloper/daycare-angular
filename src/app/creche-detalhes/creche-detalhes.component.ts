import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {CrechesService} from '../creches/creches.service'
import { Creche } from '../creches/creche/creche.model';


@Component({
  
  selector: 'mt-creche-detalhes',
  templateUrl: './creche-detalhes.component.html'
  
})
export class CrecheDetalhesComponent implements OnInit {

  creche : Creche

  constructor(private crechesService: CrechesService, private route: ActivatedRoute) { }

  //Consulta pelo ID
  ngOnInit() {
    
    this.crechesService.crecheById(this.route.snapshot.params['id'])
    .subscribe(creche => this.creche = creche)
  }

}
