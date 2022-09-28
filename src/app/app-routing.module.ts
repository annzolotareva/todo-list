import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './modules/list/pages/info/info.component';
import { ListComponent } from './modules/list/list.component';
import { AuthPageComponent } from './modules/list/pages/auth-page/auth-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', component: AuthPageComponent},
  {path: 'list', component: ListComponent, canActivate: [AuthGuard]},
  {path: 'info', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [AuthGuard]
})
export class AppRoutingModule { 
}

