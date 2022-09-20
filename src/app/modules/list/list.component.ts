import { Component, OnInit } from '@angular/core';
import { TodoListService } from './services/todo-list-service/todo-list.service';
import { ElemComponent } from "./components/elem.component";

@Component({
    selector: 'todo-list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    value: string = '';
    elem = '';

    constructor(public todoListService: TodoListService, public elemComponent: ElemComponent) { 
    }

    ngOnInit() {
        console.log(this.todoListService.elems);
    }

    addElem() {
        this.todoListService.addElem();
    }
}




