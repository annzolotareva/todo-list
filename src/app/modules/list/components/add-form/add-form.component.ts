import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ElemComponent } from "../elem/elem.component";

export class newElem {
  constructor(public id: number,public value: string,public status: string){
  }  
}

export class newId {
  constructor(public id: number){}
}

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  newValue: string = '';
  newStatus: string = 'Обычная';
  newId: number = 0;


  @Output()
    public generateId = new EventEmitter;
  @Output()
    public addElem = new EventEmitter;  

  constructor() { }

  ngOnInit(): void {
  }

  generId() {
    const thisId = new newId(this.newId);
    this.generateId.emit(thisId);
  }

  createElem() {
    const elem = new newElem(this.newId, this.newValue,this.newStatus);
    this.addElem.emit(elem)
  }
}

