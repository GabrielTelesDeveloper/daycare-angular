import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'mt-contato-creche',
  templateUrl: './contato-creche.component.html',
  styleUrls: ['./contato-creche.component.css']
})
export class ContatoCrecheComponent implements OnInit {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showSuccess() {
    this.toastr.success('Seu e-mail foi enviado, em breve entramos em contato!', 'Obaa!');
  }

  ngOnInit() {
  }

}
