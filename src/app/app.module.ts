import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './telas/inicial/inicial.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { PrincipalComponent } from './telas/principal/principal.component';
import { SobreComponent } from './telas/sobre/sobre.component';
import { ServicosComponent } from './telas/servicos/servicos.component';
import { FaleconoscoComponent } from './telas/faleconosco/faleconosco.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BackToopComponent } from './layouts/back-toop/back-toop.component';


@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    SideNavComponent,
    PrincipalComponent,
    SobreComponent,
    ServicosComponent,
    FaleconoscoComponent,
    FooterComponent,
    BackToopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
