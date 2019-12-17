import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatentsComponent} from './patents/patents.component';

const routes: Routes = [

  { path: 'patents', component: PatentsComponent },
  { path: '', component: PatentsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
