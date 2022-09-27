import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { ListModule } from "./modules/list/list.module";
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './modules/list/pages/auth-page/auth-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfoComponent } from './modules/list/pages/info/info.component';
import { NavbarComponent } from './modules/list/components/navbar/navbar.component';
import { JwtInterceptor } from './modules/list/interseptors/auth.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    InfoComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
