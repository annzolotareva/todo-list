import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ElemComponent } from "../elem/elem.component";
import { IElem } from '../../services/todo-list-service/todo-list.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  newValue!: string;
  newStatus!: string;

  @Input()
    newElem: IElem = {id: 1000, value: '', status: 'Обычная'};
  @Output()
    public addElem = new EventEmitter<IElem>();

  constructor() { }

  ngOnInit(): void {
  }

}

