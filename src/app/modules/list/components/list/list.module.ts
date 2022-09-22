import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ElemComponent } from '../elem/elem.component';
import { AddFormComponent } from '../add-form/add-form.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [ListComponent],
    declarations: [ListComponent,
    ElemComponent, AddFormComponent],
    providers: [],
})

export class ListModule { }
