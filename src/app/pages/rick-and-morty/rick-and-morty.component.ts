import { Component, OnInit } from '@angular/core';
import {Character as ModelC} from '../../models/Character'
import{Service} from '../../services/service-api.service'

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})
export class RickAndMortyComponent implements OnInit {
  modelsC : ModelC[] = [];
  models : ModelC[] = [];
  next : string = "";

  constructor(private service: Service) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(): void {
    this.service.getAllModelsCharacter()
    .subscribe(inf => {
      this.modelsC = inf.results
      this.next = inf.info.next
      console.log(this.next)
    });
  }

  more(): void {
    this.service.getAllModelsCharacterBy(this.next)
    .subscribe(inf => {
      this.models = inf.results
      this.models.forEach(
        c => this.modelsC.push(c)
      )
      this.next = inf.info.next
    });
  }

}
