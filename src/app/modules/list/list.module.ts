import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [FormsModule, CommonModule],
    exports: [ListComponent],
    declarations: [ListComponent],
    providers: [],
})
export class ListModule { }
