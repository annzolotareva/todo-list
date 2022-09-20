import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'todo-elem',
    templateUrl: 'elem.component.html',
    styleUrls: ['./elem.component.scss'],
})

export class ElemComponent implements OnInit {
    @Input()
    todoValue!: string;
    
  

    constructor() { }


    ngOnInit() { }
}