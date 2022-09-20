import { Injectable } from '@angular/core';

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
    console.log(this.elems);
  }

  addElem(): void{
    //TodoListService.
  }

  editStatus(): void{

  }

}
