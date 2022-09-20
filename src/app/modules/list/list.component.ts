import { Component, OnInit } from '@angular/core';
import { TodoListService } from './services/todo-list-service/todo-list.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    value: string = '';
    elem = '';

    constructor(public todoListService: TodoListService) { 
    }

    ngOnInit() {
        console.log(this.todoListService.elems);
    }

    addElem() {
        this.todoListService.addElem();
    }
}




