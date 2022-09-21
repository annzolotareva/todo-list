import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { ListModule } from "./modules/list/list.module";
import { CommonModule } from '@angular/common';
import { AddFormComponent } from './add-form/add-form/add-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
