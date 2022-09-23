import { Component } from '@angular/core';
import { TodoListService } from "../app/modules/list/services/todo-list-service/todo-list.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public todoListService: TodoListService) {
  }
  title = 'todo-list';

  check(event: any) {
    console.log(event);
  }
}
