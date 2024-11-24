import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listaPage } from './lista.page'; // Asegúrate de que ListaPage sea el componente exportado.

const routes: Routes = [
  {
    path: '',
    component: listaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPageRoutingModule {}
