import { Injectable } from '@angular/core';
import { Creche } from '../models/Creche';
import { Http } from '@angular/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { of } from "rxjs/observable/of";
import { MOCK } from "../dados/mock";
import { ErrorHandler } from '../app.error-handler'

@Injectable()
export class CrecheService {

  creches: Creche[]
  http: Http

  constructor() {
    this.getCreches().subscribe(cre => { this.creches = cre; });
  }

  getCreches(): Observable<Creche[]> {
    if (localStorage.getItem("creches") === null) {
      this.creches = MOCK;
    } else {
      this.creches = JSON.parse(localStorage.getItem("creches"));
    }
    return of(this.creches);
  }

  addCreches(cre: Creche) {
    this.creches.push(cre);
    localStorage.setItem("creches", JSON.stringify(this.creches));
  }

  //Arrumar essa funcionalidade
  searchCreches(search?: string): Observable<Creche[]> {
    return this.http.get('../dados/mock', { params: { q: search } })
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

}
