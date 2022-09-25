import { Injectable } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { ListComponent } from "../../list.component";

export interface IElem {
  id: number;
  value: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  found: boolean = false;
  
  arrId: Array<IElem["id"]> = [];

  elems: Array<IElem> = [ ];
  constructor() { 
  }

  delete(id: number): void{
    this.elems = this.elems.filter(elem => elem.id !== id);
  }
  
  generateId(id: IElem["id"]): void { 
    while ( this.arrId.length < 10) {
      id = Math.ceil(Math.random() * 100);
      if (this.found = true) {
        this.found = false;
      }
      for (let i = 0; i < this.arrId.length; i++){
        if (this.arrId[i] == id) {
          this.found = true;
          break;
        }
      } 
      if (!this.found) {
        this.arrId[this.arrId.length] = id;
      }
    }
    console.log(id);
   }

   addElem(elem: IElem): void {
    if (elem.value != "") {
      this.elems.unshift(elem);
      console.log("первая работает");
    } else {
      alert('Вы пытыетесь создать пустую запись!')
    }
   }
}
