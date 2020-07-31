import { Component, OnInit, Input } from '@angular/core';
import { Objecto } from '../objecto';

@Component({
  selector: 'app-objecto-detail',
  templateUrl: './objecto-detail.component.html',
  styleUrls: ['./objecto-detail.component.css']
})
export class ObjectoDetailComponent implements OnInit {
  @Input() objecto: Objecto;
  constructor() { }

  ngOnInit(): void {
  }

}
