import { Component, OnInit } from '@angular/core';

import {Episode as Model} from '../../models/Episode'
//import{Info as Model} from '../../models/Info';
import{Service} from '../../services/service-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  models : Model[] = [];

  constructor( private service: Service) { }

  ngOnInit(): void {
    this.getAll()
    this.getAllInf()
  }

  getAll(): void {
    this.service.getAllModels()
    .subscribe(inf => this.models = inf.results );
  }

  getAllInf(): void {
    this.service.getAllModels().subscribe( inf => console.log(inf) );
  }

}
