import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ElemComponent } from "../elem/elem.component";
import { IElem } from '../../services/todo-list-service/todo-list.service';

export class newElem {
  constructor(public id: number,public value: string,public status: string){
  }
  
}
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  newValue: string = '';
  newStatus: string = 'Обычная';

  //@Input()
    //newElem: IElem = {id: 1000, value: '', status: 'Обычная'};
  @Output()
    public addElem = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  createElem() {
    const elem = new newElem(1, this.newValue,this.newStatus);
    this.addElem.emit(elem)
  }
}

