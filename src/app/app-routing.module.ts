import { InicialComponent } from './telas/inicial/inicial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './telas/sobre/sobre.component';
const routes: Routes = [
  { path: '', component: InicialComponent },
  { path: 'sobre', component: SobreComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
