import { Component, OnInit } from '@angular/core';
import { Creche } from '../../models/Creche';
import { CrecheService } from '../../services/creche.service';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-id-creche',
  templateUrl: './id-creche.component.html'
})
export class IdCrecheComponent implements OnInit {

  id
  creches: Creche[] = []
  creche: Creche

  slides = [
    { image: 'assets/img/fotos/img1.jpg' },
    { image: 'assets/img/fotos/img4.jpg' },
    { image: 'assets/img/fotos/img5.jpg' }
  ];


  constructor(private crecheService: CrecheService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id
    this.crecheService.getCreches()
      .subscribe(cre => (this.creches = cre))
    this.creches.forEach(cre => {
      if (cre.id == this.id) {
        this.creche = cre;
      }
    })
  }

  ngOnInit() {
  }

}
