import { Component, OnInit, Input } from '@angular/core';
import { CrecheService } from '../../services/creche.service';
import { Creche } from '../../models/Creche';
import { ContatoCrecheComponent } from '../../../../src/app/componentes/contato-creche/contato-creche.component'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'mt-index',
  templateUrl: './index.component.html',
  animations: [
    trigger('busca', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class IndexComponent implements OnInit {

  creches
  estadoBusca = 'hidden'

  crechess: Creche[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private crecheService: CrecheService, private fb: FormBuilder) {
    this.crecheService.getCreches().subscribe(cre => {
      this.creches = cre
    })
  }

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
        this.crecheService.searchCreches(searchTerm))
      .subscribe(cre => this.creches = cre)

    this.crecheService.getCreches().subscribe(cre => { this.creches = cre })
  }

  barraDeBusca() {
    this.estadoBusca = this.estadoBusca == 'hidden' ? 'visible' : 'hidden'
  }

}