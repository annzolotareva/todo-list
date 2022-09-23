import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoListService, IElem } from '../list/services/todo-list-service/todo-list.service';
import { ElemComponent } from "../list/components/elem/elem.component";
import { AddFormComponent } from "../list/components/add-form/add-form.component";

@Component({
    selector: 'todo-list',
    templateUrl: 'list.component.html'
})


export class ListComponent implements OnInit {


    constructor(public todoListService: TodoListService) {
    }



    ngOnInit() {
        console.log(this.todoListService.elems);
    }

}




