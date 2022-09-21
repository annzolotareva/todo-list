import { style } from '@angular/animations';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AddFormComponent } from "../add-form/add-form/add-form.component";

@Component({
    selector: 'todo-elem',
    templateUrl: 'elem.component.html',
    styleUrls: ['./elem.component.scss'],
})

export class ElemComponent implements OnInit {

    constructor(public addFormComponent: AddFormComponent) { }


    ngOnInit() { }
}