import { Component, OnInit, Input } from '@angular/core';
import { IElem } from '../../services/todo-list-service/todo-list.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  @Input()
    newTodo!: IElem;
  constructor() { }

  ngOnInit(): void {
  }

}
