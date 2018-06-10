import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from "@angular/router";
import { CrecheService } from "../../services/creche.service";
import { Creche } from "../../models/Creche";
import { Servico } from "../../models/Servico";

@Component({
  selector: 'app-card-creche',
  templateUrl: './card-creche.component.html'
})
export class CardCrecheComponent implements OnInit {

  @Input() creche;
  creches: Creche[] = []

  constructor(private crecheService: CrecheService) { }

  getCreches(): void {
    this.crecheService.getCreches().subscribe(creches => (this.creches = creches))
  }

  ngOnInit() {
    this.getCreches()
  }

}
