import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'daycare',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao daycare!'

  constructor() { }

  ngOnInit() {
  }

}
