import { style } from '@angular/animations';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
@Component({
    selector: 'todo-elem',
    templateUrl: 'elem.component.html',
    styleUrls: ['./elem.component.scss'],
})
export class ElemComponent implements OnInit {
    @Input()
    newValue!: string;
    status!: string;
    valueOfTask: string = this.newValue;
    valueOfStatus: string = this.status;
    // if (valueOfStatus = ...)
    constructor(
      ) {}


    ngOnInit() { }
}