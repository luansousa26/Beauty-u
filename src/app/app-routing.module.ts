import { InicialComponent } from './telas/inicial/inicial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './telas/sobre/sobre.component';
import { ServicosComponent } from './telas/servicos/servicos.component';
import { FaleconoscoComponent } from './telas/faleconosco/faleconosco.component';
const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'sobre', component: SobreComponent},
  { path: 'servicos', component: ServicosComponent},
  { path: 'fale-conosco', component: FaleconoscoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }