import { Injectable } from '@angular/core';
import { Objecto } from './objecto';
import { OBJECTOS } from './mock-objectos'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectoService {


//  getObjectos(): Objecto[] {
//    return OBJECTOS;
//  }


getObjectos(): Observable<Objecto[]> {
    return of(OBJECTOS);
  }
  constructor() { }
}
