import { Component, OnInit, ViewChild } from '@angular/core';
import { MapaComponent } from '../mapa/mapa.component';
import { CrecheService } from '../../services/creche.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Creche } from '../../models/Creche';
import { Local } from '../../models/Local';
import { Servico } from '../../models/Servico';


@Component({
  selector: 'mt-new-creche',
  templateUrl: './new-creche.component.html',
  styleUrls: ['./new-creche.component.css']
})
export class NewCrecheComponent implements OnInit {

  @ViewChild(MapaComponent) Mapa: MapaComponent

  id: number
  creches: Creche[]
  local: Local
  cre: Creche

  servicos: Servico[] = []
  servico: Servico
  Cicone: string = "assets/img/servicos/services.png"
  Cdescricao: string
  CdirImagem: string
  Cnome: string
  Cavaliacao: number
  Csobre: string
  Chorario: string
  CfaixaEtaria: string
  Ctelefone: string

  constructor(private crecheService: CrecheService, private route: Router) {
    this.crecheService.getCreches().subscribe(cre => {
      this.creches = cre
    })
  }

  ngOnInit() {
  }

  selectCodId() {
    let i = 1
    this.creches.forEach((cre) => {
      i++
    })
    return i
  }

  addCreche() {

    this.local = {
      endereco: this.Mapa.local.formatted_address,
      lat: this.Mapa.latitude,
      lon: this.Mapa.longitude
    }

    this.id = this.selectCodId()


    this.cre = {
      id: this.id,
      dirImagem: "assets/img/creches/daycare.jpg",
      nome: this.Cnome,
      avaliacao: 0,
      sobre: this.Csobre,
      horario: this.Chorario,
      faixaEtaria: this.CfaixaEtaria,
      telefone: this.Ctelefone,
      local: this.local,
      servicos: this.servicos
    }

    this.crecheService.addCreches(this.cre)
    this.route.navigate(['./creche', this.id])
  }

  addServico() {
    this.servico = { icone: this.Cicone, descricao: this.Cdescricao }
    this.servicos.push(this.servico);
  }

}
