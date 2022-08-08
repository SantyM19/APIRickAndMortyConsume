import { Component, OnInit } from '@angular/core'

import {Episode as Model} from '../../models/Episode'
import {Character as ModelC} from '../../models/Character'
import{Service} from '../../services/service-api.service'

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  alertActive: boolean = false;
  alertWActive: boolean = false;
  alertWWActive: boolean = false;
  models : Model[] = [];
  modelsC : ModelC[] = [];
  characters: string[] = [];
  listName: string[] = [];
  type = {
    type: 'success',
  };
  typeW = {
    type: 'warning',
  };

  alert: Alert = {
    type: this.type.type,
    message: "Agregado con Exito!"
  };

  alertW: Alert = {
    type: this.typeW.type,
    message: "Ya existe!"
  };
  alertWW: Alert = {
    type: this.typeW.type,
    message: "Cantiadad maxima!"
  };

  constructor( private service: Service) { }

  ngOnInit(): void {
    this.getAll()
    this.getAllInf()
  }

  getAll(): void {
    this.service.getAllModels()
    .subscribe(inf => {
      this.models = inf.results
    });
  }

  getAllInf(): void {
    this.service.getAllModels().subscribe( inf => console.log(inf) );
  }

  list(list: any[]): void{
    this.characters = list;
    console.log(this.characters)
    this.modelsC = [];
    this.characters.forEach(
      c => this.service.getModel(c).subscribe(
        character => this.modelsC.push(character)
      )
    )
  }

  addNew(name: string) {
    this.alertActive = false
    this.alertWActive = false
    this.alertWWActive = false
    if (this.listName.length < 8){
      if (this.listName.find(n => n == name ) == undefined){
        this.listName.push(name)
        this.alertActive = true
      }
      else{
        this.alertWWActive = false
        this.alertActive = false
        this.alertWActive = true
      }
    }
    else{
      this.alertWActive = false
      this.alertActive = false
      this.alertWWActive = true
    }
  }

  closeAlert() : void {
    this.alertActive = false
  }

  closeAlertW() : void {
    this.alertWActive = false
  }

  closeAlertWW() : void {
    this.alertWWActive = false
  }

}
