import { Component, OnInit } from '@angular/core';
import { TodoListService, IElem } from '../../services/todo-list-service/todo-list.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    
    todoValue: string = '';
    newValue: string = '';
    newItem: IElem = {id: 100, value: this.newValue, status: 'ok'};

    constructor(public todoListService: TodoListService ) { 
    }


    ngOnInit() {
        console.log(this.todoListService.elems);
    }

}




