import { Component, OnInit } from '@angular/core';
import { Objecto } from '../objecto';
import { OBJECTOS } from '../mock-objectos';
import { ObjectoService } from '../objecto.service';
@Component({
  selector: 'app-objecto',
  templateUrl: './objecto.component.html',
  styleUrls: ['./objecto.component.css']
})
export class ObjectoComponent implements OnInit {

  //objecto='objecto1';
 
 
 /* objecto: Objecto = {
    id: 1,
    name: 'objecto1'
  };
  */
 //objectos=OBJECTOS;

 objectos: Objecto[];
 selectedObjecto: Objecto;
  constructor(private objectoService: ObjectoService) { }

  //getObjectos(): void {
   // this.objectos = this.objectoService.getObjectos();
  //}

  getObjectos(): void {
    this.objectoService.getObjectos()
        .subscribe(objectos => this.objectos = objectos);
  }

  ngOnInit(): void {
    this.getObjectos();
  }


  onSelect(objecto: Objecto): void {
    this.selectedObjecto = objecto;
  }

}
