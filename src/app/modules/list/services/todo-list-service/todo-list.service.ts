import { Injectable } from '@angular/core';
import { ignoreElements, Observable } from 'rxjs';
import { ListComponent } from "../../list.component";
import { HttpClient } from '@angular/common/http';

export interface IElem {
  id: number;
  value: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  
  arrId: Array<IElem["id"]> = [];

  elems: Array<IElem> = [ ];
  constructor(private http: HttpClient) { 
  }

  getElems(): Observable<Object>{
    return this.http.get('./src/assets/todo-list.json');
  }

  delete(id: number): void{
    this.elems = this.elems.filter(elem => elem.id !== id);
  }
  
  generateId(id: IElem["id"]): void {
    let found: boolean = true;
    // debugger
    while (found) {
      id = Math.ceil(Math.random() * 100);
      for (let i = 0; i < this.elems.length; i++){
        if (this.elems[i].id == id) {
          found = true;
          break;
        }
        found = false;
      } 
      if (!found) {
        this.elems[0].id = id;
      }
    }
    console.log("Вторая работает");
   }

   addElem(elem: IElem): void {
    if (elem.value != "") {
      elem.id = this.arrId[this.elems.length];
      this.elems.unshift(elem);
      console.log("первая работает");
    } else {
      alert('Вы пытыетесь создать пустую запись!')
    }
   }
}
