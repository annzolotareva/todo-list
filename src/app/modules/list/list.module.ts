import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ElemComponent } from '../list/components/elem/elem.component';
import { AddFormComponent } from '../list/components/add-form/add-form.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [ListComponent, AddFormComponent],
    declarations: [ListComponent,
    ElemComponent, AddFormComponent],
    providers: [],
})

export class ListModule { }
