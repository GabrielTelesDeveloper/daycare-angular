import { Component, OnInit, Input } from '@angular/core';
import { CrecheService } from '../../services/creche.service';
import { Creche } from '../../models/Creche';

@Component({
  selector: 'app-creche',
  templateUrl: './creche.component.html'
})
export class CrecheComponent implements OnInit {

  creches: Creche[]

  constructor(private crecheService: CrecheService) {
    //Método que lista todas as creches
    this.crecheService.getCreches().subscribe(cre => this.creches = cre)
  }

  ngOnInit() {
  }

}
