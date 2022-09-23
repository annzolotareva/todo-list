import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoListService, IElem } from '../../services/todo-list-service/todo-list.service';
import { ElemComponent } from "../elem/elem.component";

@Component({
    selector: 'todo-list',
    templateUrl: 'list.component.html'
})


export class ListComponent implements OnInit {
    nId: number = 0;


    constructor(public todoListService: TodoListService) {
    }



    ngOnInit() {
        console.log(this.todoListService.elems);
    }

}




