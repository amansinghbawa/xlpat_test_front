import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatentsComponent} from './patents/patents.component';
import { PatentDetailComponent } from './patent-detail/patent-detail.component';

const routes: Routes = [

  { path: 'patents', component: PatentsComponent },
  { path: '', component: PatentsComponent },
  { path: 'patents/:publicationNumber', component: PatentDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
