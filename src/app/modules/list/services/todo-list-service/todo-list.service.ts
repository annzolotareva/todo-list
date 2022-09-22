import { Injectable } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { ListComponent } from "../../components/list/list.component";

const enum ElemStatuses {
  common = 'Common',
  important = 'Important',
  completed = 'Completed'
}

const arrOfElemStatuses = [ElemStatuses.common, ElemStatuses.important, ElemStatuses.completed];


export interface IElem {
  id: number;
  value: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  currentStatus!: string;
  
  elems: Array<IElem> = [ {
    id: 1,
    value: "Первая запись",
    status: arrOfElemStatuses[0]
},
{   id:2,
    value: "Вторая запись",
    status: arrOfElemStatuses[1]
},
{   
    id: 3,
    value: "Третья запись",
    status: arrOfElemStatuses[0]
},
{
  id: 4,
  value: "Четвёртая запись",
  status: arrOfElemStatuses[3]
}
]
  constructor() { 
  }


  delete(id: number): void{
    this.elems = this.elems.filter(user => user.id !== id);
  }

   addElem(elem: IElem): void {
    this.elems.unshift(elem);
   }

  editStatus(status: string): void{
    
  }

}
