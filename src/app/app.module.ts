import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatentsComponent } from './patents/patents.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PatentDetailComponent } from './patent-detail/patent-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PatentsComponent,
    HeaderComponent,
    PatentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
