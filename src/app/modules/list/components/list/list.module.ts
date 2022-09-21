import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ElemComponent } from './components/elem.component';

@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [ListComponent],
    declarations: [ListComponent,
    ElemComponent],
    providers: [],
})

export class ListModule { }
