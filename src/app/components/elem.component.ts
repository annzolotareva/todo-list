import { Component, OnInit } from '@angular/core';

export interface IElem {
    id: number;
    status: string;
}

@Component({
    selector: 'todo-elem',
    templateUrl: 'elem.component.html'
})

export class ElemComponent implements OnInit {
    elems: Array<IElem> = [ {
        id: 1,
        status: 'common'
    },
    {   id:2,
        status: 'important'
    },
    {   
        id: 3,
        status: 'completed'
    }
    ]
    constructor() { }

    ngOnInit() { }
}