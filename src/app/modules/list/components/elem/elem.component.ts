import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IElem } from '../services/todo-list-service/todo-list.service';

@Component({
    selector: 'todo-elem',
    templateUrl: 'elem.component.html',
    styleUrls: ['./elem.component.scss'],
})

export class ElemComponent implements OnInit {
    @Input()
    newTodo!: IElem;

    constructor() { }


    ngOnInit() { }
}