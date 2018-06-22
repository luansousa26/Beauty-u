import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './telas/inicial/inicial.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
