import { style } from '@angular/animations';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IElem } from '../../services/todo-list-service/todo-list.service';

@Component({
    selector: 'todo-elem',
    templateUrl: 'elem.component.html',
    styleUrls: ['./elem.component.scss'],
})
export class ElemComponent implements OnInit {
    @Input()
    elem!: IElem;
    status!: string;
    @Output()
    public deleteElem = new EventEmitter<number>();
    constructor(
      ) {}


    ngOnInit() {
        console.log(this.elem);
    }
}